import React from 'react';
import css from './BuildControls.module.scss';
import WithClassName from '../../../HOC/withClassName';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => {
    return (
        <>
            <p>
                Current price: <strong>{props.price.toFixed(2)}</strong>
            </p>
            {controls.map((c) => (
                // <BuildControl key={c.label} label={c.label} ingredientAdded={props.ingredientAdded} type={c.type} />
                <BuildControl
                    key={c.label}
                    label={c.label}
                    added={() => props.ingredientAdded(c.type)}
                    removed={() => props.ingredientRemoved(c.type)}
                    disabled={props.disabled[c.type]}
                />
            ))}
            <button className={css.OrderButton} disabled={!props.purchaseable}>
                Order Now
            </button>
        </>
    );
};

export default WithClassName(buildControls, css.BuildControls);
