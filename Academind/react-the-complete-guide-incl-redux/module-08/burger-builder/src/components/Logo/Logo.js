import React from 'react';
import css from './Logo.module.scss';
import burgerLogo from '../../assets/images/logo.png';

const logo = (props) => {
    return (
        <div className={css.Logo}>
            <img src={burgerLogo} alt="MyBurger" />
        </div>
    );
};

export default logo;
