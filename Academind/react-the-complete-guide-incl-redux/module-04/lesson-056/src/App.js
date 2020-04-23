import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Phil', age: 53 },
            { name: 'Clara', age: 57, hobby: 'IFM' },
            { name: 'Branden', age: 20, hobby: 'Computer Games' },
        ],
        otherState: 'some other value',
        showPersons: false,
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

    togglePersonsHandler = () => {
        const show = this.state.showPersons;

        this.setState({
            showPersons: !show,
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

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person) => {
                        return <Person name={person.name} age={person.age} />;
                    })}
                </div>
            );
        }

        return (
            <div className='App'>
                <h1>Hi, I'm a React App</h1>
                <button style={style} onClick={this.togglePersonsHandler}>
                    Toggle list
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
