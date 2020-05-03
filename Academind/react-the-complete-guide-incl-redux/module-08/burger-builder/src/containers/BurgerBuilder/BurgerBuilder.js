import React, { Component } from 'react';
import css from './BurgerBuilder.module.scss';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import _sum from 'lodash/sum';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3,
};

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0,
            },
            totalPrice: 4,
            purchaseable: false,
        };
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = newCount;

        const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.setState({ totalPrice: updatedPrice, ingredients: updatedIngredients });

        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount > 0) {
            const newCount = oldCount - 1;
            const updatedIngredients = { ...this.state.ingredients };
            updatedIngredients[type] = newCount;

            const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

            this.setState({ totalPrice: updatedPrice, ingredients: updatedIngredients });

            this.updatePurchaseState(updatedIngredients);
        }
    };

    updatePurchaseState(ingredients) {
        const state = { ...ingredients };
        const sum = _sum(Object.keys(state).map((key) => state[key]));

        this.setState({ purchaseable: sum > 0 });
    }

    render() {
        const disableInfo = { ...this.state.ingredients };
        for (let key in disableInfo) {
            disableInfo[key] = this.state.ingredients[key] <= 0;
        }

        return (
            <>
                <Burger ingredients={this.state.ingredients} />
                <hr />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disableInfo}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                />
            </>
        );
    }
}

export default BurgerBuilder;
