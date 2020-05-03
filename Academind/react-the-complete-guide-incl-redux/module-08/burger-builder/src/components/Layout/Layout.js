import React from 'react';
import css from './Layout.module.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => {
    return (
        <>
            <div>
                <Toolbar />
                <p>sidedrawer, backdrop</p>
            </div>
            <hr />
            <main className={css.content}>{props.children}</main>
        </>
    );
};

export default layout;
