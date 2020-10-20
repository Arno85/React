import React from 'react';
import classes from './Cockpit.scss';
import { PropTypes } from 'prop-types';

const Cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.redText);
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.boldText);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Persons</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

Cockpit.propTypes = {
    showPersons: PropTypes.bool,
    persons: PropTypes.array,
    clicked: PropTypes.func
};

export default Cockpit;