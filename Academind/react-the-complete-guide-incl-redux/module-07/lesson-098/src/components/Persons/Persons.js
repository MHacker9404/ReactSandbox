import React, { PureComponent } from 'react';
// import styles from './Persons.module.css';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
// import _ from 'lodash';

//  PureComponent implements shouldComponentUpdate to check all the values in props for changes
class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.info('[Persons.js] constructor');
    }

    //  use this for component cleanup when removed from the DOM
    componentWillUnmount() {
        console.info('[Persons.js] componentWillUnmount');
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     const update = !_(this.props).isEqual(nextProps);
    //     console.log(`[Persons.js] shouldComponentUpdate - ${update}`, this.props, nextProps, nextState, nextContext);

    //     return update;
    // }

    render = () => {
        console.info('[Persons.js] render');

        return this.props.persons.map((person, index) => {
            return (
                <ErrorBoundary key={person.id}>
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.clicked(index)}
                        changed={(event) => this.props.changed(event, person.id)}>
                        <p>My hobby is {person.hobby}</p>
                    </Person>
                </ErrorBoundary>
            );
        });
    };
}

export default Persons;
