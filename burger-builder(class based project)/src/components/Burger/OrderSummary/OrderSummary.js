import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './OrderSummary.module.scss';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(k => {
            return (
                <li key={k}>
                    <span className={classes.Capitalize}>{k}: </span>
                    {props.ingredients[k]}
                </li>
            );
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button
                clicked={props.purchaseCancel}
                buttonType='Danger'
            >Cancel</Button>
            <Button
                clicked={props.purchaseContinue}
                buttonType='Success'>Continue</Button>
        </Aux>
    );
};

export default orderSummary;