import React from 'react';
import css from './SideDrawer.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    const classNames = [css.SideDrawer, props.open ? css.Open : css.Close].join(' ');

    return (
        <>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={classNames}>
                {/* <Logo height="11%" /> */}
                <div className={css.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    );
};

export default sideDrawer;
