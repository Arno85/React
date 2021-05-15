import React from 'react';
import classes from './CheckoutSummary.module.scss';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const CheckoutSummary = (props) => (
    <div className={ classes.CheckoutSummary }>
        <h1>We hope it tastes well!</h1>
        <section>
            <Burger ingredients={ props.ingredients } />
        </section>
        <Button
            buttonType="Danger"
            clicked={ props.checkoutCancelled }
        >Cancel</Button>
        <Button
            buttonType="Success"
            clicked={ props.checkoutContinued }
        >Continue</Button>
    </div>
);

export default CheckoutSummary;