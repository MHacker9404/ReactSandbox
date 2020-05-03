import React from 'react';
import css from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';

const toolbar = (props) => {
    return (
        <header className={css.Toolbar}>
            <div>MENU</div>
            <Logo />
            <nav>LINKS</nav>
        </header>
    );
};

export default toolbar;
