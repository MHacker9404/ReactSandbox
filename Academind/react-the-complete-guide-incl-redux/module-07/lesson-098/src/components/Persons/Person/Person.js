import React, { Component } from 'react';
import classes from './Person.module.css';
// import Aux from '../../../HOC/Auxiliary';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] constructor');
    }

    render = () => {
        console.info('[Person.js] rendering....');

        return (
            <>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <div>{this.props.children}</div>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </>
        );
    };
}

export default Person;
