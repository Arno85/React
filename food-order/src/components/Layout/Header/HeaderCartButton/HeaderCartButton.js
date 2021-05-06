import classes from './HeaderCartButton.module.css';
import CartIcon from '../../../Cart/CartIcon/CartIcon';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../../../store/cart-context';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
    const { items } = cartCtx;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }

        setButtonIsHighlighted(true);

        const timer = setTimeout(() => {
            setButtonIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    const totalItems = items.reduce((curNumber, item) => curNumber + item.amount, 0);
    const buttonClasses = `${ classes.button } ${ buttonIsHighlighted ? classes.bump : '' }`;

    return (
        <button className={ buttonClasses } onClick={ props.onClick }>
            <span className={ classes.icon }>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={ classes.badge }>{ totalItems }</span>
        </button>
    );
}

export default HeaderCartButton;