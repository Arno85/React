import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const nameRef = useRef();
  const ageRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const nameValue = nameRef.current.value;
    const ageValue = ageRef.current.value;

    if (nameValue.trim().length === 0 || ageValue.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+ageValue < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(nameValue, ageValue);

    nameRef.current.value = '';
    ageRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={ error.title }
          message={ error.message }
          onConfirm={ errorHandler }
        />
      ) }
      <Card className={ classes.input }>
        <form onSubmit={ addUserHandler }>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={ nameRef }
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ ageRef }
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
