import React from 'react';
import classes from './Order.module.scss';

const Order = (props) => {
    let ingredients = null;

    if (props.ingredients) {
        ingredients = Object.keys(props.ingredients)
            .map(k => {
                return (
                    <span key={ k } className={ classes.Label }>
                        { k } ({ props.ingredients[k] })
                    </span >
                );
            });
    }

    return (
        <div className={ classes.Order }>
            <p>Purchased on: <strong>{ new Date(props.purchasedOn).toISOString().split('T')[0] }</strong></p>
            <p>Ingredients: { ingredients }</p>
            <p>Price: <strong>${ Number.parseFloat(props.totalPrice).toFixed(2) }</strong></p>
        </div>
    )
};

export default Order;