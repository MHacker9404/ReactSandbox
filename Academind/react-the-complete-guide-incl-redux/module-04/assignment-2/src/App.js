import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';

class App extends Component {
    state = {
        inputLength: 0,
    };

    inputChangeListener = (event) => {
        const state = { ...this.state };
        state.inputLength = event.target.value.length;

        this.setState({ inputLength: state.inputLength });
    };

    render() {
        return (
            <div className="App">
                <input type="text" onChange={this.inputChangeListener} />
                <p>{this.state.inputLength}</p>
                <Validation length={this.state.inputLength}></Validation>
            </div>
        );
    }
}

export default App;
