import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    show: false,
    totalPrice: 0,
    totalQuantity: 0,
    changed: false,
};

const updateExistingItemTotalPrice = (existingItem) => {
    return existingItem.quantity * existingItem.price;
};

const updateCartTotalPrice = (items) => {
    return items.reduce((prevVal, curVal) => prevVal += curVal.total, 0);
};

const slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart(state, action) {
            state.items = action.payload.items;
            state.totalPrice = action.payload.totalPrice;
            state.totalQuantity = action.payload.totalQuantity;
            state.changed = false;
        },
        toggleCart(state) {
            state.show = !state.show;
            state.changed = false;
        },
        addToCart(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity++;
                existingItem.total = updateExistingItemTotalPrice(existingItem);
            } else {
                const newItem = {
                    id: action.payload.id,
                    title: action.payload.title,
                    quantity: 1,
                    total: action.payload.price,
                    price: action.payload.price,
                }

                state.items.unshift(newItem);
            }

            state.totalPrice = updateCartTotalPrice(state.items);
            state.totalQuantity++;
            state.changed = true;
        },
        removeFromCart(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== action.payload.id);
            }
            else {
                existingItem.quantity--;
                existingItem.total = updateExistingItemTotalPrice(existingItem);
            }

            state.totalPrice = updateCartTotalPrice(state.items);
            state.totalQuantity--;
            state.changed = true;
        }
    }
});

export const cartActions = slice.actions;

export default slice.reducer;