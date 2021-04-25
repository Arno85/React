import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { useState } from 'react';

const NewExpense = (props) => {
    const [openForm, setOpenForm] = useState(false);

    const saveExpenseDataHandler = (expenseData) => {
        const expense = {
            ...expenseData,
            id: Math.random().toString(),
        }

        props.onAddExpense(expense);
        setOpenForm((prevState) => !prevState);
    };

    const openFormHandler = () => {
        setOpenForm((prevState) => !prevState);
    }

    let newExpenseContent = <button onClick={ openFormHandler }>Add New Expense</button>

    if (openForm) {
        newExpenseContent = <ExpenseForm
            onSaveExpenseData={ saveExpenseDataHandler }
            onCancelForm={ openFormHandler }
        ></ExpenseForm>
    }

    return (
        <div className="new-expense">
            { newExpenseContent }
        </div>
    );
}

export default NewExpense;