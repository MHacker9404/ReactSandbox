import React from 'react';
import css from './App.module.scss';
import Layout from './HOC/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import WithClassName from './HOC/withClassName';
import Checkout from './containers/Checkout/Checkout';

// import logo from './logo.svg';
// import Button from './Button/Button';

function App() {
    return (
        <>
            <Layout>
                <BurgerBuilder />
                <Checkout />
            </Layout>
        </>
    );
}

export default WithClassName(App, css.app);
