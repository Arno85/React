import React from 'react';

const userInput = (props) => {
    const style = {
        marginTop: '20px',
        padding: '5px',
        fontSize: '20px',
        border: '1px solid #ccc',
    }

    return (
        <div className="UserInput">
            <input style={style} type="text" onChange={props.change} value={props.username}/>
        </div>
    )
}

export default userInput;