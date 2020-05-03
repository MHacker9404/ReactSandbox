import React from 'react';
import css from './OrderSummary.module.scss';

const orderSummary = (props) => {
    let view = null;
    if (props && props.ingredients) {
        const keys = Object.keys(props.ingredients);
        view = keys.map((key) => {
            return (
                <li key={key}>
                    <span style={{ textTransform: 'capitalize' }}>{key}</span>: {props.ingredients[key]}
                </li>
            );
        });
    }
    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>{view}</ul>
            <p>Continue to checkout?</p>
        </>
    );
};

export default orderSummary;
