import React, { Component } from 'react';
import css from './Layout.module.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true,
    };
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    render = () => (
        <>
            <Toolbar />
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
            <p>backdrop</p>
            <hr />
            <main className={css.content}>{this.props.children}</main>
        </>
    );
}

export default Layout;
