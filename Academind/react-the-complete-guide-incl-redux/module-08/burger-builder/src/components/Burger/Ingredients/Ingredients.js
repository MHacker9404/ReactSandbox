import React from 'react';
import css from './Ingredients.modules.scss';

const ingredient = (props) => {
    let view = null;
    switch (props.type) {
        case 'bread-bottom':
            view = <div className={css.breadBottom}>bread bottom</div>;
            break;
        case 'bread-top':
            view = (
                <div className={css.breadTop}>
                    <div className={css.seeds1}>
                        <div className={css.seeds2}>bread top</div>
                    </div>
                </div>
            );
        case 'meat':
            view = <div className={css.meat}>meat</div>;
            break;
        case 'salad':
            view = <div className={css.salad}>meat</div>;
            break;
        case 'bacon':
            view = <div className={css.bacon}>meat</div>;
            break;
        case 'cheese':
            view = <div className={css.cheese}>meat</div>;
            break;
        default:
            view = null;
    }

    return <>{view}</>;
};

export default ingredient;
