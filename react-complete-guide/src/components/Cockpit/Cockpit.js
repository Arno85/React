import React, { useState, useEffect, useRef } from 'react';
import classes from './Cockpit.scss';
import { PropTypes } from 'prop-types';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useState(() => {
        console.log(`[Cockpit.js] React hook - useState`);
    });

    useEffect(() => {
        console.log(`[Cockpit.js] React hook - useEffect
        Combine componentDidMount & componentDidUpdate Lifecycle hooks for functionnal components`);

        // Http Request
        setTimeout(() => {
            // alert(`save data to the cloud!`);
        }, 1000);

        toggleBtnRef.current.click();

        return () => {
            console.log(`[Cockpit.js] Cleanup work in useEffect`);
        };
    }, []);

    console.log(`[Cockpit.js] Lifecycle hook - render
    Do : Render HTML
    Don't : Initialize or update state`);

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
            <button 
                className={btnClass} 
                onClick={props.clicked}
                ref={toggleBtnRef}>Toggle Persons
            </button>
            <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer>    
        </div>
    );
};

Cockpit.propTypes = {
    showPersons: PropTypes.bool,
    persons: PropTypes.array,
    clicked: PropTypes.func
};

export default React.memo(Cockpit);