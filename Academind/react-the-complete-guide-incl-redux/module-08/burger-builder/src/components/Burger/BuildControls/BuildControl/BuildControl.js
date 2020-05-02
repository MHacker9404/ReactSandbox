import React from 'react';
import css from './BuildControl.module.scss';
import WithClassName from '../../../../HOC/withClassName';

const buildControl = (props) => {
    return (
        <>
            <div className={css.Label}>{props.label}</div>
            <button className={css.Less}>Less</button>
            <button className={css.More}>More</button>
        </>
    );
};

export default WithClassName(buildControl, css.BuildControl);
