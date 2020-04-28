import React, { useEffect, useRef, useContext } from 'react';
import styles from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.info('[cockipt.js] useEffect');

        // //  http request

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
            {/* <AuthContext.Consumer>{(context) => <button onClick={context.login}>Log in</button>}</AuthContext.Consumer> */}
            <button onClick={authContext.login}>Log in</button>
        </div>
    );
};

export default React.memo(Cockpit);
