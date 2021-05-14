import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const items = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  let cartContent = <p>Your cart is empty!</p>;

  if (items.length > 0) {
    cartContent = (
      <Fragment>
        <ul>
          {
            items.map(item => (
              <CartItem
                key={ item.id }
                item={
                  {
                    id: item.id,
                    title: item.title,
                    quantity: item.quantity,
                    total: item.total,
                    price: item.price,
                  }
                }
              />
            ))
          }
        </ul>
        <h3>Total Price: ${ totalPrice.toFixed(2) }{ ' ' }</h3>
      </Fragment>
    );
  }

  return (
    <Card className={ classes.cart }>
      <h2>Your Shopping Cart</h2>
      <ul>{ cartContent }</ul>
    </Card>
  );
};

export default Cart;
