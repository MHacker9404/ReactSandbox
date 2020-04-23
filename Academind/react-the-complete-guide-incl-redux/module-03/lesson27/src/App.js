import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Phil', age: 53 },
            { name: 'Clara', age: 57, hobby: 'IFM' },
        ],
        otherState: 'some other value',
    };

    buttonClickHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 53 },
                { name: 'Clara', age: 27, hobby: 'IFM' },
            ],
        });
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: event.target.value, age: 53 },
                { name: 'Clara', age: 27, hobby: 'IFM' },
            ],
        });
    };

    render() {
        const style = {
            backgroundColor: 'lightgreen',
            font: 'inherit',
            border: '2px dashed blue',
            padding: '8px',
            cursor: 'pointer',
        };

        return (
            <div className='App'>
                <h1>Hi, I'm a React App</h1>
                <button
                    style={style}
                    onClick={this.buttonClickHandler.bind(this, 'Jehosephat')}>
                    Switch Name
                </button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    changed={this.nameChangedHandler}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.buttonClickHandler.bind(this, 'JimBob')}>
                    My Hobbies: {this.state.persons[1].hobby}
                </Person>
            </div>
        );
    }
}

export default App;
