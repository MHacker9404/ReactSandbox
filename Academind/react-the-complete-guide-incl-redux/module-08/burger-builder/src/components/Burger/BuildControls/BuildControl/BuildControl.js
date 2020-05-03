import React from 'react';
import css from './BuildControl.module.scss';
import WithClassName from '../../../../HOC/withClassName';

const buildControl = (props) => {
    return (
        <>
            <div className={css.Label}>{props.label}</div>
            <button className={css.Less} onClick={props.removed} disabled={props.disabled}>
                Less
            </button>
            <button className={css.More} onClick={props.added}>
                More
            </button>
        </>
    );
};

export default WithClassName(buildControl, css.BuildControl);
