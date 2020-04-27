import React, { Component } from 'react';
// import styles from './Persons.module.css';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Persons extends Component {
    constructor(props) {
        super(props);
        console.info('[Persons.js] constructor');
    }

    //  use this for component cleanup when removed from the DOM
    componentWillUnmount() {
        console.info('[Persons.js] componentWillUnmount');
    }

    render = () => {
        console.info('[Persons.js] render');

        return this.props.persons.map((person, index) => {
            return (
                <ErrorBoundary key={person.id}>
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        click={() => this.props.clicked(index)}
                        changed={(event) => this.props.changed(event, person.id)}>
                        My hobby is {person.hobby}
                    </Person>
                </ErrorBoundary>
            );
        });
    };
}

export default Persons;
