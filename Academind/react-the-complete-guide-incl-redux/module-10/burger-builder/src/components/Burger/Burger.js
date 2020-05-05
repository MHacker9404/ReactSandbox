import React from 'react';
import css from './Burger.module.scss';
import WithClassName from '../../HOC/withClassName';
import Ingredient from './Ingredients/Ingredients';
import _some from 'lodash/some';

const burger = (props) => {
    const keys = Object.keys(props.ingredients);
    const ingredients = keys.map((key) =>
        [...Array(props.ingredients[key])].map((_, index) => <Ingredient key={`${key}_${index}`} type={key} />),
    );
    const reduced = ingredients.reduce((prev, current) => {
        return prev.concat(current);
    }, []);

    // if (reduced.length === 0) {
    let view = _some(reduced) ? reduced : <p>Please choose some ingredients</p>;

    return (
        <>
            <Ingredient type="bread-top" />
            {view}
            <Ingredient type="bread-bottom" />
        </>
    );
};

export default WithClassName(burger, css.Burger);
