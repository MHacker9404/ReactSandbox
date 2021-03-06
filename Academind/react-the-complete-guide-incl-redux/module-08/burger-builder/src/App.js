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

        // <div className="App">
        //     <header className="App-header">
        //         <img src={logo} className="App-logo" alt="logo" />
        //         <p>
        //             Edit <code>src/App.js</code> and save to reload.
        //         </p>
        //         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        //             Learn React
        //         </a>
        //         <hr />
        //         <button className="btn" onClick={() => alert('I am globally styled')}>
        //             I am button 1 - Press Me
        //         </button>
        //         <Button />
        //     </header>
        // </div>
    );
}

export default WithClassName(App, css.app);
