import React, { useState } from 'react';
import styles from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

function App() {
    const [persons, setPersons] = useState([
        { id: '1', name: 'Phil', age: 53 },
        { id: '2', name: 'Clara', age: 57, hobby: 'IFM' },
        { id: '3', name: 'Branden', age: 20, hobby: 'Computer Games' },
    ]);
    // const [otherState, setOtherState] = useState('some other value');
    const [showPersons, setShowPersons] = useState(false);

    const nameChangedHandler = (event, id) => {
        const state = [...persons];
        const index = state.findIndex((p) => p.id === id);
        state[index].name = event.target.value;

        setPersons(state);
    };

    const togglePersonsHandler = () => {
        setShowPersons(!showPersons);
    };

    const deletePersonHandler = (index) => {
        const state = [...persons];
        state.splice(index, 1);

        setPersons(state);
    };

    let personsView = null;
    if (showPersons) {
        personsView = (
            <div>
                {persons.map((person, index) => {
                    return (
                        <ErrorBoundary key={person.id}>
                            <Person
                                key={person.id}
                                name={person.name}
                                age={person.age}
                                click={() => deletePersonHandler(index)}
                                changed={(event) => nameChangedHandler(event, person.id)}>
                                My hobby is {person.hobby}
                            </Person>
                        </ErrorBoundary>
                    );
                })}
            </div>
        );
    }

    const classes = [];
    if (persons.length <= 2) {
        classes.push('red');
    }
    if (persons.length <= 1) {
        classes.push('bold');
    }

    console.info(classes, styles);

    return (
        <div className={styles.App}>
            <h1>Hi, I'm a React App</h1>
            <p className={classes.map((cn) => styles[cn]).join(' ')}>This is really working!</p>
            <button className={styles.button} onClick={() => togglePersonsHandler()}>
                Toggle list
            </button>
            {personsView}
        </div>
    );
}

export default App;
