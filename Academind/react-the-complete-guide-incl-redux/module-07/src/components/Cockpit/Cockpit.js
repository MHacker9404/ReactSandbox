import React from 'react';
import styles from './Cockpit.module.css';

const cockipt = (props) => {
    const classes = [];
    if (props.persons.length <= 2) {
        classes.push('red');
    }
    if (props.persons.length <= 1) {
        classes.push('bold');
    }

    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p className={classes.map((cn) => styles[cn]).join(' ')}>This is really working!</p>
            <button className={props.showPersons ? styles.buttonLoaded : styles.buttonUnloaded} onClick={props.click}>
                Toggle list
            </button>
        </div>
    );
};

export default cockipt;
