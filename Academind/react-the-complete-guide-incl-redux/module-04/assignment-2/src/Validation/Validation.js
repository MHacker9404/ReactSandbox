import React from 'react';
import './Validation.css';

const minLength = 5;

const validation = (props) => {
    const result = props.length > minLength ? <p>Text long enough</p> : <p>Text too short</p>;
    return (
        <div className="Validation">
            <p>{props.length}</p>
            {result}
        </div>
    );
};
export default validation;
