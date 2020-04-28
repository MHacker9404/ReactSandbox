import React, { useEffect, useRef } from 'react';
import styles from './Cockpit.module.css';

const Cockpit = (props) => {
    const toggleButtonRef = useRef(null);

    useEffect(() => {
        console.info('[cockipt.js] useEffect');

        // //  http request
        // const timer = setTimeout(() => {
        //     alert(`empty dependencies - runs first time only`);
        // }, 1000);
        // return () => {
        //     clearTimeout(timer);
        //     console.info('[cockipt.js] callback for dismount');
        // };

        //  have to do this in useEffect so it runs after the render is executed
        toggleButtonRef.current.click();

        return () => {
            console.info('[cockipt.js] callback for dismount');
        };
    }, []);

    useEffect(() => {
        console.info('[cockipt.js] 2nd useEffect');

        return () => {
            console.info('[cockipt.js] 2nd callback for dismount');
        };
    });

    const classes = [];
    if (props.personsLength <= 2) {
        classes.push('red');
    }
    if (props.personsLength <= 1) {
        classes.push('bold');
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={classes.map((cn) => styles[cn]).join(' ')}>This is really working!</p>
            <button
                ref={toggleButtonRef}
                className={props.showPersons ? styles.buttonLoaded : styles.buttonUnloaded}
                onClick={props.click}>
                Toggle list
            </button>
        </div>
    );
};

export default React.memo(Cockpit);
