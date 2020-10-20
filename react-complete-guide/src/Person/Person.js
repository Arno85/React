import React from 'react';
import PropTypes from 'prop-types';
import classes from './Person.scss';

const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

person.propTypes = {
    click: PropTypes.click,
    name: PropTypes.name,
    age: PropTypes.age,
    children: PropTypes.children,
    changed: PropTypes.changed
};

person.defaultProps = {
    click: null,
    name: null,
    age: null,
    children: null,
    changed: null
};

export default person; 