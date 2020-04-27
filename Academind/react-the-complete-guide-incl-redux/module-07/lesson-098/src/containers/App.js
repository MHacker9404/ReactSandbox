import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import Aux from '../HOC/Auxiliary';
// import WithClass from '../HOC/WithClass';
import withClassName from '../HOC/withClassName';

//  lesson 87 - we don't have access to lifecycle hooks in functional components
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            persons: [
                { id: '1', name: 'Phil', age: 53 },
                { id: '2', name: 'Clara', age: 57, hobby: 'IFM' },
                { id: '3', name: 'Branden', age: 20, hobby: 'Computer Games' },
            ],
            otherState: 'some other value',
            showPersons: false,
            showCockpit: true,
            changeCounter: 0,
        };

        console.info('[App.js] constructor', props, this.state);
    }

    //  don't cause side-effects: http calls, etc.
    static getDerivedStateFromProps(props, state) {
        console.info('getDerivedStateFromProps', props, state);

        return state;
    }

    //  don't cause side-effects
    //  may cancel updating process
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.info('shouldComponentUpdate', nextProps, nextState, nextContext);

        return true;
    }

    //  don't cause side-effects
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.info('getSnapshotBeforeUpdate', prevProps, prevState);

        return { message: 'snapshot' };
    }

    //  don't update state
    //  do cause side-effects
    componentDidUpdate(prevProps, prevState, snapShot) {
        console.info('componentDidUpdate', prevProps, prevState, snapShot);
    }

    componentDidMount() {
        console.info('componentDidMount');
    }

    nameChangedHandler = (event, id) => {
        const state = [...this.state.persons];
        const index = state.findIndex((p) => p.id === id);
        state[index].name = event.target.value;

        this.setState({ persons: state });
        this.setState((prevState, props) => {
            return {
                persons: state,
                changeCounter: prevState.changeCounter + 1,
            };
        });
    };

    togglePersonsHandler = () => {
        this.setState({ showPersons: !this.state.showPersons });
    };

    toggleCockpitHandler = () => {
        this.setState({ showCockpit: !this.state.showCockpit });
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
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                />
            );
        }
        let cockpitView = null;
        if (this.state.showCockpit) {
            cockpitView = (
                <Cockpit
                    title={this.props.appTitle}
                    personsLength={this.state.persons.length}
                    showPersons={this.state.showPersons}
                    click={this.togglePersonsHandler}
                />
            );
        }

        // return (
        //     <WithClass className={styles.App}>
        //         <button onClick={this.toggleCockpitHandler}>Toggle cockpit</button>
        //         {cockpitView}
        //         {personsView}
        //     </WithClass>
        // );
        return (
            <>
                <button onClick={this.toggleCockpitHandler}>Toggle cockpit</button>
                {cockpitView}
                {personsView}
            </>
        );
    };
}

export default withClassName(App, styles.App);
