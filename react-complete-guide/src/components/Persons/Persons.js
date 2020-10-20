import React from 'react';
import { PropTypes } from 'prop-types';
import Person from './Person/Person';

const Persons = (props) => {
    let persons = null;

    if (props.showPersons) {
        persons = (
            <div className="Persons">
                {props.persons.map((p, index) => 
                    <Person
                        click={() => props.clicked(index)}
                        name={p.name}
                        age={p.age}
                        key={p.id}
                        changed={(event) => props.changed(event, p.id)} />
                )}
            </div>
        );
    };

    return (persons);
};

Persons.propTypes = {
    showPersons: PropTypes.bool,
    persons: PropTypes.array,
    clicked: PropTypes.func,
    changed: PropTypes.func
};

export default Persons;