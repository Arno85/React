import { useReducer } from 'react';

const initialState = {
    value: '',
    isTouched: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'INPUT':
            return { value: action.value, isTouched: state.isTouched };
        case 'BLUR':
            return { value: state.value, isTouched: true };
        case 'RESET':
            return { value: '', isTouched: false };
        default:
            return state;
    }
};

const useInput = (validationMethods) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const isValid = validationMethods.every(vm => vm(state.value));
    const hasError = !isValid && state.isTouched;

    const valueChangedHandler = (event) => {
        dispatch({ type: 'INPUT', value: event.target.value });
    };

    const inputBlurHandler = (event) => {
        dispatch({ type: 'BLUR' });
    };

    const reset = () => {
        dispatch({ type: 'RESET' });
    };

    return {
        value: state.value,
        isValid,
        hasError,
        valueChangedHandler,
        inputBlurHandler,
        reset,
    }
}

export default useInput;