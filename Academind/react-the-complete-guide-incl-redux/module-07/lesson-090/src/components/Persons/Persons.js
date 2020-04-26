import React from 'react';
// import styles from './Persons.module.css';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const persons = (props) => {
    console.info('[Persons.js] render');

    return props.persons.map((person, index) => {
        return (
            <ErrorBoundary key={person.id}>
                <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    click={() => props.clicked(index)}
                    changed={(event) => props.changed(event, person.id)}>
                    My hobby is {person.hobby}
                </Person>
            </ErrorBoundary>
        );
    });
};

export default persons;
