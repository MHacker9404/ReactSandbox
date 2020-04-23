import React from 'react';
import './Person.css';

const person = (props) => {
    console.info(props);

    //return <p>I'm {props.name} and I am { Math.floor(Math.random() * 50) } years old!</p>
    return (
        <div className='Person'>
            <p>
                I'm {props.name} and I am {props.age} years old!
            </p>
            <p onClick={props.click}>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </div>
    );
};

export default person;
