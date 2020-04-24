import React from 'react';
// import './Person.css';
// import Radium from 'radium';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = (props) => {
    console.info(props);

    return (
        // <div className='Person' style={style}>
        <StyledDiv>
            <p>
                I'm {props.name} and I am {props.age} years old!
            </p>
            <p onClick={props.click}>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </StyledDiv>
        // </div>
    );
};

// export default Radium(person);
export default person;
