import React, { Component } from 'react';
// import css from './BurgerBuilder.module.scss';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import _sum from 'lodash/sum';
import _cloneDeep from 'lodash/cloneDeep';
import axios from '../../axios-orders';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';

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
            ingredients: null,
            totalPrice: 4,
            purchaseable: false,
            purchaseMode: false,
            loading: false,
        };
    }

    componentDidMount = async () => {
        try {
            var response = await axios.get('/ingredients.json');
            if (response && response.data) {
                const data = _cloneDeep(response.data);
                console.info(response, data);
                this.setState({ ingredients: { ...data } });
            }
        } catch (error) {
            throw error;
        }
    };

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

    onOrderedHandler = () => {
        this.setState({ purchaseMode: true });
    };

    onCanceledHandler = () => {
        this.setState({ purchaseMode: false });
    };

    onContinueHandler = async () => {
        this.setState({ loading: true });

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Phil',
                address: {
                    street: 'street',
                },
                email: 'yes@no.com',
            },
            deliveryMethod: 'fastest',
        };
        try {
            await axios.post('/orders.json', order);
        } catch (error) {}
        this.setState({ loading: false, purchaseMode: false });
    };

    render() {
        const disableInfo = { ...this.state.ingredients };
        for (let key in disableInfo) {
            disableInfo[key] = this.state.ingredients[key] <= 0;
        }

        const orderView =
            this.state.loading || !this.state.ingredients ? (
                <Spinner />
            ) : (
                <OrderSummary
                    ingredients={this.state.ingredients}
                    cancelled={this.onCanceledHandler}
                    continued={this.onContinueHandler}
                    price={this.state.totalPrice}></OrderSummary>
            );

        const burgerView = this.state.ingredients ? (
            <>
                <Burger ingredients={this.state.ingredients || {}} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disableInfo}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    onOrdered={this.onOrderedHandler}
                />
            </>
        ) : (
            <Spinner />
        );

        return (
            <>
                <Modal show={this.state.purchaseMode} close={this.onCanceledHandler}>
                    {orderView}
                </Modal>
                {burgerView}
            </>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);
