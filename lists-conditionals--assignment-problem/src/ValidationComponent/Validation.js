import React from 'react';

const validation = (props) => {
    return props.textLength < 5
        ? <p>Text too short</p>
        : <p>Text long enough</p>
}

export default validation;