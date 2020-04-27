import React, { useEffect } from 'react';
import styles from './Cockpit.module.css';

const Cockipt = (props) => {
    useEffect(() => {
        console.info('[cockipt.js] useEffect');

        //  http request
        setTimeout(() => {
            alert(`empty dependencies - runs first time only`);
        }, 1000);
        return () => {
            console.info('[cockipt.js] callback for dismount');
        };
    }, []);

    useEffect(() => {
        console.info('[cockipt.js] useEffect');

        //  http request
        setTimeout(() => {
            alert(`saved data to cloud`);
        }, 1000);
    }, [props.persons]);

    const classes = [];
    if (props.persons.length <= 2) {
        classes.push('red');
    }
    if (props.persons.length <= 1) {
        classes.push('bold');
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={classes.map((cn) => styles[cn]).join(' ')}>This is really working!</p>
            <button className={props.showPersons ? styles.buttonLoaded : styles.buttonUnloaded} onClick={props.click}>
                Toggle list
            </button>
        </div>
    );
};

export default Cockipt;
