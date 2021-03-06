import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../api';
import Spinner from '../../components/UI/Spinner/Spinner';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
}

class BurgerBuilder extends Component {
	state = {
		ingredients: null,
		totalPrice: 4,
		purcheasable: false,
		purchasing: false,
		loading: false,
		error: false,
	};

	componentDidMount() {
		axios.get('ingredients.json')
			.then(response => {
				this.setState({ ingredients: response.data });
			})
			.catch(error => {
				this.setState({ error: true });
			})
	}

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	}

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	}

	purchaseContinueHandler = () => {
		const queryParams = [
			`price=${ this.state.totalPrice }`
		];

		for (let i in this.state.ingredients) {
			const queryParam = `${ encodeURIComponent(i) }=${ encodeURIComponent(this.state.ingredients[i]) }`;
			queryParams.push(queryParam);
		}

		this.props.history.push({
			pathname: '/checkout',
			search: `?${ queryParams.join('&') }`
		});
	}

	updatePurchaseState = (ingredients) => {
		const sum = Object.keys(ingredients)
			.map(k => ingredients[k])
			.reduce((sum, el) => {
				return sum + el;
			}, 0);

		this.setState({ purcheasable: sum > 0 });
	}

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = { ...this.state.ingredients };

		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;

		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients
		});

		this.updatePurchaseState(updatedIngredients);
	}

	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];

		if (oldCount <= 0) {
			return;
		}

		const updatedCount = oldCount - 1;
		const updatedIngredients = { ...this.state.ingredients };
		updatedIngredients[type] = updatedCount;

		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;

		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients
		});

		this.updatePurchaseState(updatedIngredients);
	}

	render() {
		const disabledInfo = {
			...this.state.ingredients
		}

		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0
		}

		let orderSummary = null;
		let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;

		if (this.state.ingredients) {
			burger = (
				<Aux>
					<Burger ingredients={ this.state.ingredients } />
					<BuildControls
						price={ this.state.totalPrice }
						ingredientAdded={ this.addIngredientHandler }
						ingredientRemoved={ this.removeIngredientHandler }
						disabled={ disabledInfo }
						purcheasable={ this.state.purcheasable }
						purchasing={ this.purchaseHandler } />
				</Aux>);

			orderSummary = <OrderSummary
				price={ this.state.totalPrice }
				purchaseCancel={ this.purchaseCancelHandler }
				purchaseContinue={ this.purchaseContinueHandler }
				ingredients={ this.state.ingredients }>
			</OrderSummary>
		}

		if (this.state.loading) {
			orderSummary = <Spinner />;
		}

		return (
			<Aux>
				<Modal
					show={ this.state.purchasing }
					modalClosed={ this.purchaseCancelHandler }>
					{ orderSummary }
				</Modal>
				{burger }
			</Aux>
		);
	}
}

export default withErrorHandler(BurgerBuilder, axios);
