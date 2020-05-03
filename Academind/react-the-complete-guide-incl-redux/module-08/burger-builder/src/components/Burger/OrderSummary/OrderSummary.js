import React, { Component } from 'react';
// import css from './OrderSummary.module.scss';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentDidUpdate = (prevProps, prevState) => {
        console.info('[OrderSummary] componentDidUpdate: ', prevProps, prevState);
    };

    render = () => {
        let view = null;
        if (this.props && this.props.ingredients) {
            const keys = Object.keys(this.props.ingredients);
            view = keys.map((key) => {
                return (
                    <li key={key}>
                        <span style={{ textTransform: 'capitalize' }}>{key}</span>: {this.props.ingredients[key]}
                    </li>
                );
            });
        }

        return (
            <>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>{view}</ul>
                <p>
                    <strong>Total Price: {this.props.price.toFixed(2)}</strong>
                </p>
                <p>Continue to checkout?</p>
                <Button type="Danger" clicked={this.props.cancelled}>
                    Cancel
                </Button>
                <Button type="Success" clicked={this.props.continued}>
                    Continue
                </Button>
            </>
        );
    };
}

export default OrderSummary;
