import React from 'react';
import css from './Layout.module.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => {
    return (
        <>
            <div>
                <Toolbar />
                <SideDrawer />
                <p>backdrop</p>
            </div>
            <hr />
            <main className={css.content}>{props.children}</main>
        </>
    );
};

export default layout;
