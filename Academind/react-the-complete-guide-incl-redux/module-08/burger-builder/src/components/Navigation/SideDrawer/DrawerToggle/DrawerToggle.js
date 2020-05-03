import React from 'react';
import css from './DrawerToggle.module.scss';
// import WithClassName from '../../../../HOC/withClassName';

const drawerToggle = (props) => {
    return (
        <div className={css.DrawerToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default drawerToggle;
