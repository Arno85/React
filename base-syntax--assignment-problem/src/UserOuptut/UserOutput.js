import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>My name is {props.username}</p>
            <p>This is my assignment!</p>
        </div>
    )
}

export default userOutput;