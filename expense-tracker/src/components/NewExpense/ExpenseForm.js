import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        title: '',
        amount: 0,
        date: new Date().toISOString().split('T')[0],
    });

    const titleChangedHandler = (evt) => {
        setUserInput((prevState) => ({
            ...prevState,
            title: evt.target.value
        }));
    };

    const amountChangedHandler = (evt) => {
        setUserInput((prevState) => ({
            ...prevState,
            amount: +evt.target.value
        }));
    };

    const dateChangedHandler = (evt) => {
        setUserInput((prevState) => ({
            ...prevState,
            date: evt.target.value
        }));
    };

    const cancelHandler = () => {
        props.onCancelForm();
    };

    const submitExpenseDataHandler = (evt) => {
        evt.preventDefault();

        const expenseData = {
            title: userInput.title,
            amount: userInput.amount,
            date: new Date(userInput.date),
        }

        if (!expenseData.title || !expenseData.amount) {
            return;
        }

        props.onSaveExpenseData(expenseData);

        setUserInput(() => ({
            title: '',
            date: '',
            amount: '',
        }));
    }

    return (
        <form onSubmit={ submitExpenseDataHandler }>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={ userInput.title }
                        onChange={ titleChangedHandler } />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={ userInput.amount }
                        onChange={ amountChangedHandler } />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={ userInput.date }
                        onChange={ dateChangedHandler } />
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={ cancelHandler }>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;