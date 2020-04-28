import React from 'react';
import './App.module.scss';
import Layout from './components/Layout/Layout';

// import logo from './logo.svg';
// import Button from './Button/Button';

function App() {
    return (
        <>
            <Layout>
                <p>Main Area - Burger Builder</p>
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

export default App;
