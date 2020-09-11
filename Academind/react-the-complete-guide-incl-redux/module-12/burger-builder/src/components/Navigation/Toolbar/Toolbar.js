import React from 'react';
import css from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
    return (
        <header className={css.Toolbar}>
            <DrawerToggle clicked={props.toggleSiderDrawer} />
            {/* <Logo height="80%" /> */}
            <div className={css.Logo}>
                <Logo />
            </div>
            <nav className={css.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default toolbar;
