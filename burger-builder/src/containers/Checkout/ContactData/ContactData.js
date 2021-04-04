import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.scss';
import axios from '../../../api/index';

class ContactData extends Component {
    state = {
        customer: {
            name: 'Arnaud Martin',
            address: {
                street: 'Test street',
                zipCode: '12345',
                province: 'Quebec',
                country: 'Canada',
            },
            email: 'test@test.com',
        },
        loading: false,
        purchasing: false,
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.price,
            customer: this.state.customer,
            deliveryMethod: 'fastest',
            purchasedOn: new Date(),
        };

        axios.post('orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.replace('/');
            })
            .catch(error => {
                this.setState({ loading: false });
            })
    }

    render() {
        let form = (
            <form >
                <input type="text" name="name" placeholder="Your name" />
                <input type="email" name="email" placeholder="Your email" />
                <input type="text" name="street" placeholder="Your street" />
                <input type="text" name="zipCode" placeholder="Your Zip Code" />
                <Button buttonType="Success" clicked={ this.orderHandler }>Order</Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className={ classes.ContactData }>
                <h3>Enter your Contact data</h3>
                { form }
            </div>
        );
    }
}

export default ContactData;