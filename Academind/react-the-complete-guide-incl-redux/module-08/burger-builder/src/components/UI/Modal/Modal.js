import React from 'react';
import css from './Modal.module.scss';
import WithClassName from '../../../HOC/withClassName';

const modal = (props) => {
    return <>{props.children}</>;
};

export default WithClassName(modal, css.Modal);
