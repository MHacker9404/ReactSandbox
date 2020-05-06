import React from 'react';
import css from './App.module.scss';
import Layout from './HOC/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import WithClassName from './HOC/withClassName';

// import logo from './logo.svg';
// import Button from './Button/Button';

function App() {
    return (
        <>
            <Layout>
                <BurgerBuilder />
            </Layout>
        </>
    );
}

export default WithClassName(App, css.app);
