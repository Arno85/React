import classes from './Checkout.module.css';
import useInput from '../../../hooks/use-input';
import Input from '../../UI/Input/Input';

const Checkout = (props) => {
    const isNotEmpty = (value) => value.trim() !== '';
    let formIsValid = false;

    const {
        value: nameValue,
        isValid: nameIsValid,
        hasError: nameHasError,
        valueChangedHandler: nameChangerHandler,
        inputBlurHandler: nameBlurHandler,
        reset: nameReset,
    } = useInput([isNotEmpty]);

    const {
        value: streetValue,
        isValid: streetIsValid,
        hasError: streetHasError,
        valueChangedHandler: streetChangerHandler,
        inputBlurHandler: streetBlurHandler,
        reset: streetReset,
    } = useInput([isNotEmpty]);

    const {
        value: zipValue,
        isValid: zipIsValid,
        hasError: zipHasError,
        valueChangedHandler: zipChangerHandler,
        inputBlurHandler: zipBlurHandler,
        reset: zipReset,
    } = useInput([isNotEmpty]);

    const {
        value: cityValue,
        isValid: cityIsValid,
        hasError: cityHasError,
        valueChangedHandler: cityChangerHandler,
        inputBlurHandler: cityBlurHandler,
        reset: cityReset,
    } = useInput([isNotEmpty]);

    if (nameIsValid && streetIsValid && zipIsValid && cityIsValid) {
        formIsValid = true;
    }

    const confirmHandler = (evt) => {
        evt.preventDefault();

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            nameValue,
            streetValue,
            zipValue,
            cityValue,
        });

        nameReset();
        streetReset();
        zipReset();
        cityReset();
    };

    const getFormControlClasses = (inputHasError) => {
        return inputHasError
            ? `${ classes.control } ${ classes.invalid }`
            : `${ classes.control }`;
    }

    return (
        <form className={ classes.form } onSubmit={ confirmHandler }>
            <div className={ getFormControlClasses(nameHasError) }>
                <Input
                    label='Name'
                    input={ {
                        id: 'name',
                        name: 'name',
                        type: 'text',
                        value: nameValue,
                        onChange: nameChangerHandler,
                        onBlur: nameBlurHandler,
                    } }
                />
                { nameHasError && <p>Please enter a valid name!</p> }
            </div>
            <div className={ getFormControlClasses(streetHasError) }>
                <Input
                    label='Street'
                    input={ {
                        id: 'street',
                        name: 'street',
                        type: 'text',
                        value: streetValue,
                        onChange: streetChangerHandler,
                        onBlur: streetBlurHandler,
                    } }
                />
                { streetHasError && <p>Please enter a valid street!</p> }
            </div>
            <div className={ getFormControlClasses(zipHasError) }>
                <Input
                    label='Zip Code'
                    input={ {
                        id: 'zip',
                        name: 'zip',
                        type: 'text',
                        value: zipValue,
                        onChange: zipChangerHandler,
                        onBlur: zipBlurHandler,
                    } }
                />
                { zipHasError && <p>Please enter a valid zip code!</p> }
            </div>
            <div className={ getFormControlClasses(cityHasError) }>
                <Input
                    label='City'
                    input={ {
                        id: 'city',
                        name: 'city',
                        type: 'text',
                        value: cityValue,
                        onChange: cityChangerHandler,
                        onBlur: cityBlurHandler,
                    } }
                />
                { cityHasError && <p>Please enter a valid city!</p> }
            </div>
            <div className={ classes.actions }>
                <button className={ classes['button--alt'] } type='button' onClick={ props.onCancel }>Cancel</button>
                <button disabled={ !formIsValid } className={ classes.submit }>Confirm</button>
            </div>
        </form>
    );
}

export default Checkout;