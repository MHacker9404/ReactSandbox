import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Person.module.css';
import withClassName from '../../../HOC/withClassName';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] constructor');
    }

    render = () => {
        console.info('[Person.js] rendering....');

        return (
            <React.Fragment>
                <p onClick={this.props.clicked}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <div>{this.props.children}</div>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </React.Fragment>
        );
    };
}

Person.propTypes = {
    clicked: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
};

export default withClassName(Person, styles.Person);
