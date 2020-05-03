import React from 'react';
import css from './Backdrop.module.scss';
import WithClassName from '../../../HOC/withClassName';

const backdrop = (props) => {
    return props.show ? <div className={css.Backdrop} onClick={props.clicked}></div> : null;
};

export default backdrop;
