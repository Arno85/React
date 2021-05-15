import React from 'react';
import classes from './Input.module.scss';

const Input = (props) => {
    let element;
    const inputElCLasses = [];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputElCLasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case ('textarea'):
            element = (
                <textarea
                    className={ inputElCLasses.join(' ') }
                    { ...props.elementConfig }
                    value={ props.value } onChange={ props.changed }>
                </textarea>
            );
            break;
        case ('select'):
            element = (
                <select
                    className={ inputElCLasses.join(' ') }
                    onChange={ props.changed }>
                    { props.elementConfig.options.map(opt => (
                        <option key={ opt.value } value={ opt.value }>{ opt.displayValue }</option>
                    )) }
                </select>
            );
            break;
        default:
            element = (
                <input
                    className={ inputElCLasses.join(' ') }
                    { ...props.elementConfig }
                    value={ props.value }
                    onChange={ props.changed } />
            );
            break;
    }

    return (
        <div className={ classes.Input }>
            <label>{ props.label }</label>
            { element }
        </div>
    );
}

export default Input;