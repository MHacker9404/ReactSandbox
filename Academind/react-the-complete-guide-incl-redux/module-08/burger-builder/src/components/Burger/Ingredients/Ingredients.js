import React from 'react';
import PropTypes from 'prop-types';
import css from './Ingredients.module.scss';

const ingredient = (props) => {
    let view = null;
    switch (props.type) {
        case 'bread-bottom':
            view = <div className={css.breadBottom} />;
            break;
        case 'bread-top':
            view = (
                <div className={css.breadTop}>
                    <div className={css.seeds1} />
                    <div className={css.seeds2} />
                </div>
            );
            break;
        case 'meat':
            view = <div className={css.meat} />;
            break;
        case 'salad':
            view = <div className={css.salad} />;
            break;
        case 'bacon':
            view = <div className={css.bacon} />;
            break;
        case 'cheese':
            view = <div className={css.cheese} />;
            break;
        default:
            view = null;
    }

    return <>{view}</>;
};

ingredient.propTypes = {
    type: PropTypes.string.isRequired,
};

export default ingredient;
