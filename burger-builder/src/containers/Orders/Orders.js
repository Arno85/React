import React, { Component } from 'react';
import axios from '../../api/index';
import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: false
    }

    componentDidMount() {
        this.setState({ loading: true });

        axios.get('orders.json')
            .then(response => {
                const orders = [];
                for (let key in response.data) {
                    orders.push({
                        id: key,
                        ...response.data[key],
                    });
                }
                this.setState({ loading: false, orders });
            })
            .catch(error => {
                this.setState({ loading: false });
            })
    }

    render() {
        let orders = (
            this.state.orders.map(order =>
                <Order
                    key={ order.id }
                    ingredients={ order.ingredients }
                    totalPrice={ order.totalPrice }
                    purchasedOn={ order.purchasedOn } />
            )
        );

        if (this.state.loading) {
            orders = <Spinner />
        }

        return (
            <div>
                {orders }
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);