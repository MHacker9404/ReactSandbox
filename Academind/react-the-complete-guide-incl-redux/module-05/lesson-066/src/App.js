import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { id: '1', name: 'Phil', age: 53 },
            { id: '2', name: 'Clara', age: 57, hobby: 'IFM' },
            { id: '3', name: 'Branden', age: 20, hobby: 'Computer Games' },
        ],
        otherState: 'some other value',
        showPersons: false,
    };

    nameChangedHandler = (event, id) => {
        const persons = [...this.state.persons];
        const index = persons.findIndex((p) => p.id === id);
        persons[index].name = event.target.value;

        this.setState({ persons: persons });
    };

    togglePersonsHandler = () => {
        const show = this.state.showPersons;

        this.setState({
            showPersons: !show,
        });
    };

    deletePersonHandler = (index) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({ persons: persons });
    };

    render() {
        const style = {
            backgroundColor: this.state.showPersons ? 'coral' : 'lightgreen',
            color: this.state.showPersons ? 'black' : 'red',
            font: 'inherit',
            border: '2px dashed blue',
            padding: '8px',
            cursor: 'pointer',
        };

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                key={person.id}
                                name={person.name}
                                age={person.age}
                                click={() => this.deletePersonHandler(index)}
                                changed={(event) =>
                                    this.nameChangedHandler(event, person.id)
                                }>
                                <p>My hobby is {person.hobby}</p>
                            </Person>
                        );
                    })}
                </div>
            );
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className='App'>
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <button style={style} onClick={this.togglePersonsHandler}>
                    Toggle list
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
