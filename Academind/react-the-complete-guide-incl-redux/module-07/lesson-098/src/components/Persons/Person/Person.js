import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Person.module.css';
import withClassName from '../../../HOC/withClassName';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();

        console.log('[Person.js] constructor');
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render = () => {
        console.info('[Person.js] rendering....');

        return (
            <React.Fragment>
                <p onClick={this.props.clicked}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <div>{this.props.children}</div>
                <input
                    type="text"
                    //  prior to react 16.3 - use this form of ref
                    //  this cannot be used in functional components
                    // ref={(el) => {
                    //     this.inputElement = el;
                    // }}
                    ref={this.inputElementRef}
                    onChange={this.props.changed}
                    value={this.props.name}
                />
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
