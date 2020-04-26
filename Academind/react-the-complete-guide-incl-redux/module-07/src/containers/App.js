import React, { useState } from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
                <Persons persons={persons} clicked={deletePersonHandler} changed={nameChangedHandler} />
            </div>
        );
    }

    return (
        <div className={styles.App}>
            <Cockpit persons={persons} showPersons={showPersons} click={togglePersonsHandler} />
            {personsView}
        </div>
    );
}

export default App;
