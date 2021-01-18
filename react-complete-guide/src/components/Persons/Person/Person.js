import React from 'react';
import PropTypes from 'prop-types';
import classes from './Person.scss';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

const Person = (props) => {
    console.log(`[Person.js] Lifecycle hook - render
    Do : Render HTML
    Don't : Initialize or update state`);

    return (
        <Aux>
            <AuthContext.Consumer>
                {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please Login!</p>}
            </AuthContext.Consumer>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </Aux>
    );
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    children: PropTypes.any,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person); 