import React, { Component } from 'react';
import css from './BurgerBuilder.module.scss';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
        };
    }

    render() {
        return (
            <>
                <Burger ingredients={this.state.ingredients} />
                <hr />
                <BuildControls></BuildControls>
            </>
        );
    }
}

export default BurgerBuilder;
