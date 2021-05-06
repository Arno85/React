import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const totalAmount = state.totalAmount + action.item.price * action.item.amount;
            const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
            const existingCartItem = state.items[existingCartItemIndex];

            let updatedItem;
            let updatedItems;

            if (existingCartItem) {
                updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount
                }
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(action.item);
            }

            return {
                ...defaultCartState,
                items: updatedItems,
                totalAmount
            };
        case 'REMOVE':
            const existingItemIndex = state.items.findIndex(item => item.id === action.id);
            const existingItem = state.items[existingItemIndex];
            const total = state.totalAmount - existingItem.price;
            let items;

            if (existingItem.amount === 1) {
                items = state.items.filter(item => item.id !== action.id);
            } else {
                const item = {
                    ...existingItem,
                    amount: existingItem.amount - 1,
                }
                items = [...state.items];
                items[existingItemIndex] = item;
            }

            return {
                ...defaultCartState,
                items,
                totalAmount: total
            };
        default:
            return defaultCartState;
    }
};

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({ type: 'ADD', item });
    }

    const removeItemToCartHandler = id => {
        dispatchCartAction({ type: 'REMOVE', id });
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
    }

    return (
        <CartContext.Provider value={ cartContext }>{ props.children }</CartContext.Provider>
    );
}

export default CartProvider;