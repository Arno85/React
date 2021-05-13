import classes from './Cart.module.css';
import CartItem from './CartItem/CartItem';
import Modal from '../UI/Modal/Modal';
import { useContext, useState } from 'react';
import cartContext from '../../store/cart-context';
import Checkout from './Checkout/Checkout';
import useHttp from '../../hooks/use-http';

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const cartCtx = useContext(cartContext);
    const { isLoading, error, sendRequest: saveOrder } = useHttp();

    const cartTotalAmount = `$${ cartCtx.totalAmount.toFixed(2) }`;

    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const orderButtonbHandler = () => {
        setIsCheckout(true);
    };

    const submitOrderHandler = async (values) => {
        try {
            await saveOrder(
                {
                    url: 'https://learning-react-arno85-default-rtdb.firebaseio.com/orders.json',
                    method: 'POST',
                    body: {
                        user: {
                            name: values.nameValue,
                            street: values.streetValue,
                            zipCode: values.zipValue,
                            city: values.cityValue,
                        },
                        orderedItems: cartCtx.items,
                    },
                },
                () => { },
            );

            cartCtx.clearCart();
            props.onClose();
        }
        catch (e) { }
    };

    const cartItems = cartCtx.items.map(item =>
        <CartItem
            key={ item.id }
            name={ item.name }
            amount={ item.amount }
            price={ item.price }
            onRemove={ cartItemRemoveHandler.bind(null, item.id) }
            onAdd={ cartItemAddHandler.bind(null, item) } />
    );

    const modalActions = <div className={ classes.actions }>
        <button className={ classes['button--alt'] } onClick={ props.onClose }>Close</button>
        { hasItems && <button className={ classes.button } onClick={ orderButtonbHandler }>Order</button> }
    </div>


    return (
        <Modal onClose={ props.onClose }>
            <ul className={ classes['cart-items'] }>
                { cartItems }
            </ul>
            <div className={ classes.total }>
                <span>Total Amount</span>
                <span>{ cartTotalAmount }</span>
            </div>
            {isCheckout && isLoading && <p>Saving order...</p> }
            {isCheckout && !isLoading && <Checkout onCancel={ props.onClose } onConfirm={ submitOrderHandler } /> }
            {!isCheckout && modalActions }
            { error && <h3 className={ classes.error }>An error occured during the save of your order!</h3> }
        </Modal >
    );
}

export default Cart;