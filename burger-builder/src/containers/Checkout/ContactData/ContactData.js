import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import classes from './ContactData.module.scss';
import axios from '../../../api/index';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                    maxLength: 6,
                },
                valid: false,
                touched: false,
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'City',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {
                            value: 'fastest',
                            displayValue: 'Fastest'
                        },
                        {
                            value: 'cheapest',
                            displayValue: 'Cheapest'
                        }
                    ],
                },
                value: 'fastest',
                valid: true,
            },
        },
        formIsValid: false,
        loading: false,
        purchasing: false,
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({ loading: true });

        const formData = {};

        for (let formElId in this.state.orderForm) {
            formData[formElId] = this.state.orderForm[formElId].value
        }

        const order = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.price,
            orderData: formData,
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

    inputChangedHandler = (event, formElId) => {
        const val = event.target.value;
        const updatedOrderForm = JSON.parse(JSON.stringify(this.state.orderForm));
        const updatedOrderFormEl = updatedOrderForm[formElId];
        let formIsValid = true;

        updatedOrderFormEl.value = val;
        updatedOrderFormEl.valid = this.checkValidityInput(updatedOrderFormEl.value, updatedOrderFormEl.validation);
        updatedOrderFormEl.touched = true;

        for (let formElId in updatedOrderForm) {
            formIsValid = updatedOrderForm[formElId].valid && formIsValid;
        }

        this.setState({
            orderForm: updatedOrderForm,
            formIsValid
        });
    }

    checkValidityInput = (value, rules) => {
        let isValid = true;

        if (rules?.required) {
            isValid = !!value.trim() && isValid;
        }

        if (rules?.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules?.maxLength) {
            isValid = value.length <= rules.minLength && isValid;
        }

        return isValid;
    }

    render() {
        const formElements = [];

        for (let key in this.state.orderForm) {
            formElements.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        let form = (
            <form onSubmit={ this.orderHandler }>
                {
                    formElements.map(formEl => (
                        <Input
                            key={ formEl.id }
                            elementType={ formEl.config.elementType }
                            elementConfig={ formEl.config.elementConfig }
                            value={ formEl.config.value }
                            invalid={ !formEl.config.valid }
                            shouldValidate={ formEl.config.validation }
                            touched={ formEl.config.touched }
                            changed={ (event) => this.inputChangedHandler(event, formEl.id) } />
                    ))
                }
                <Button buttonType="Success" disabled={ !this.state.formIsValid }>Order</Button>
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