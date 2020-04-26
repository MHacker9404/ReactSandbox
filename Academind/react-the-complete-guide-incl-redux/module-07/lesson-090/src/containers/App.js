import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

//  lesson 87 - we don't have access to lifecycle hooks in functional components
class App extends Component {
    constructor(props) {
        super(props);
        console.info('[App.js] constructor');
    }

    state = {
        persons: [
            { id: '1', name: 'Phil', age: 53 },
            { id: '2', name: 'Clara', age: 57, hobby: 'IFM' },
            { id: '3', name: 'Branden', age: 20, hobby: 'Computer Games' },
        ],
        otherState: 'some other value',
        showPersons: false,
    };

    static getDerivedStateFromProps(props, state) {
        console.info('getDerivedStateFromProps', props, state);

        return state;
    }

    componentWillMount() {
        console.info('componentWillMount');
    }

    componentDidMount() {
        console.info('componentDidMount');
    }

    nameChangedHandler = (event, id) => {
        const state = [...this.state.persons];
        const index = state.findIndex((p) => p.id === id);
        state[index].name = event.target.value;

        this.setState({ persons: state });
    };

    togglePersonsHandler = () => {
        this.setState({ showPersons: !this.state.showPersons });
    };

    deletePersonHandler = (index) => {
        const state = [...this.state.persons];
        state.splice(index, 1);

        this.setState({ persons: state });
    };

    render = () => {
        console.info('[App.js] render');

        let personsView = null;
        if (this.state.showPersons) {
            personsView = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                    />
                </div>
            );
        }

        return (
            <div className={styles.App}>
                <Cockpit
                    title={this.props.appTitle}
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    click={this.togglePersonsHandler}
                />
                {personsView}
            </div>
        );
    };
}

export default App;
