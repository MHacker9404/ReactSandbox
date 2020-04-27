import React, { Component } from 'react';
import classes from './Person.module.css';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] constructor');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Person.js] shouldComponentUpdate', nextProps, nextState, nextContext);
        return true;
    }

    render = () => {
        return (
            <div className={classes.Person}>
                <p>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p onClick={this.props.click}>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        );
    };
}

export default Person;
