import React, { Component } from 'react';
import css from './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false,
    };
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    sideDrawerToggleHandler = () => {
        const state = this.state.showSideDrawer;
        this.setState({ showSideDrawer: !state });

        /*
            this.setState((priorState) => {
                return {showSideDrawer: !priorState.showSideDrawer};
            });
        */
    };

    render = () => (
        <>
            <Toolbar toggleSideDrawer={this.sideDrawerToggleHandler} />
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
            <hr />
            <main className={css.content}>{this.props.children}</main>
        </>
    );
}

export default Layout;
