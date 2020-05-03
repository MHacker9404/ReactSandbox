import React from 'react';
import css from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
    return (
        <header className={css.Toolbar}>
            <div>MENU</div>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default toolbar;
