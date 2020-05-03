import React from 'react';
import css from './Toolbar.module.scss';

const toolbar = (props) => {
    return (
        <header className={css.Toolbar}>
            <div>MENU</div>
            <div>LOGO</div>
            <nav>LINKS</nav>
        </header>
    );
};

export default toolbar;
