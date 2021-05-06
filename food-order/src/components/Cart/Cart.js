import classes from './Cart.module.css';
import CartItem from './CartItem/CartItem';
import Modal from '../UI/Modal/Modal';
import { useContext } from 'react';
import cartContext from '../../store/cart-context';

const Cart = (props) => {
    const cartCtx = useContext(cartContext);

    const cartTotalAmount = `$${ cartCtx.totalAmount.toFixed(2) }`;

    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    }

    const cartItemAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 });
    }

    const cartItems = cartCtx.items.map(item =>
        <CartItem
            key={ item.id }
            name={ item.name }
            amount={ item.amount }
            price={ item.price }
            onRemove={ cartItemRemoveHandler.bind(null, item.id) }
            onAdd={ cartItemAddHandler.bind(null, item) } />
    );

    return (
        <Modal onClose={ props.onClose }>
            <ul className={ classes['cart-items'] }>
                { cartItems }
            </ul>
            <div className={ classes.total }>
                <span>Total Amount</span>
                <span>{ cartTotalAmount }</span>
            </div>
            <div className={ classes.actions }>
                <button className={ classes['button--alt'] } onClick={ props.onClose }>Close</button>
                { hasItems && <button className={ classes.button }>Order</button> }
            </div>
        </Modal>
    );
}

export default Cart;