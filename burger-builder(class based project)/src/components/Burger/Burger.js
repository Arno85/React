import React from 'react';
import classes from './Burger.module.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
	let ingredients = Object.keys(props.ingredients)
		.map((k) => {
			return [...Array(props.ingredients[k])].map((_, i) => {
				return <BurgerIngredient key={ k + i } type={ k } />;
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);

	if (ingredients.length === 0) {
		ingredients = <p>Please start adding ingredients!</p>;
	}

	return (
		<div className={ classes.burger }>
			<BurgerIngredient type="bread-top" />
			{ingredients }
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default burger;
