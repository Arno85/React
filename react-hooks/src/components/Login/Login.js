import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  switch (action.type) {
    case 'EMAIL_INPUT':
      return { value: action.val, isValid: action.val.includes('@') }
    case 'EMAIL_BLUR':
      return { value: state.value, isValid: state.value.includes('@') }
    default:
      return { value: '', isValid: false }
  };
}

const passwordReducer = (state, action) => {
  switch (action.type) {
    case 'PASSWORD_INPUT':
      return { value: action.val, isValid: action.val.trim().length > 6 }
    case 'PASSWORD_BLUR':
      return { value: state.value, isValid: state.value.trim().length > 6 }
    default:
      return { value: '', isValid: false }
  };
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null });

  const authCtx = useContext(AuthContext);

  const emailRef = useRef();
  const passwordRef = useRef();

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    console.log('Effect running');

    return () => {
      console.log('Effect cleanup');
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('Check Validity');
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500);

    return () => {
      console.log('Timeout Cleanup');
      clearTimeout(timeout);
    };
  }, [
    emailIsValid,
    passwordIsValid,
  ]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'EMAIL_INPUT', val: event.target.value });

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'PASSWORD_INPUT', val: event.target.value });

    // setFormIsValid(
    //   emailState.isValid && event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'EMAIL_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'PASSWORD_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailRef.current.focus();
    } else {
      passwordRef.current.focus();
    }

  };

  return (
    <Card className={ classes.login }>
      <form onSubmit={ submitHandler }>
        <Input
          ref={ emailRef }
          id="email"
          label="E-Mail"
          isValid={ emailIsValid }
          value={ emailState.value }
          onChange={ emailChangeHandler }
          onBLur={ validateEmailHandler }
        ></Input>
        <Input
          ref={ passwordRef }
          id="password"
          label="Password"
          isValid={ passwordIsValid }
          value={ passwordState.value }
          onChange={ passwordChangeHandler }
          onBLur={ validatePasswordHandler }
        ></Input>
        <div className={ classes.actions }>
          <Button type="submit" className={ classes.btn }>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
