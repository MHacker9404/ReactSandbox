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
            {controls.map((c) => (
                <BuildControl key={c.label} label={c.label} />
            ))}
        </>
    );
};

export default WithClassName(buildControls, css.BuildControls);
