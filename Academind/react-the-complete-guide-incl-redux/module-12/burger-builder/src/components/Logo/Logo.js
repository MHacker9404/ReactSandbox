import React from 'react';
import css from './Logo.module.scss';
import burgerLogo from '../../assets/images/logo.png';

const logo = (props) => {
    return (
        <div className={css.Logo} style={{ height: props.height }}>
            <img src={burgerLogo} alt="MyBurger" />
        </div>
    );
};

export default logo;
