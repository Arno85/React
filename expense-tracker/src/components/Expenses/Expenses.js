import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const ExpenseList = (props) => {
    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());

    const yearFilterHandler = (year) => {
        setFilteredYear(year);
    }

    const filteredExpenses = props.expenses.filter(e => e.date.getFullYear() === filteredYear);

    return (
        <Card className="expenses">
            <ExpensesFilter
                onFilter={ yearFilterHandler }
                year={ filteredYear }
            ></ExpensesFilter>
            <ExpensesChart expenses={ filteredExpenses }></ExpensesChart>
            <ExpensesList expenses={ filteredExpenses }></ExpensesList>
        </Card>
    );
}

export default ExpenseList;