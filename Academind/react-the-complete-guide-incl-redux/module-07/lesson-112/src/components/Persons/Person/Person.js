import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Person.module.css';
import withClassName from '../../../HOC/withClassName';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();

        console.log('[Person.js] constructor', props);
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render = () => {
        console.info('[Person.js] rendering....', this.props);

        return (
            <React.Fragment>
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please Login</p>}
                <p onClick={this.props.clicked}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <div>{this.props.children}</div>
                <input type="text" ref={this.inputElementRef} onChange={this.props.changed} value={this.props.name} />
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
