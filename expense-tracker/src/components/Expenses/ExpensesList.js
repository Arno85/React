import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
    if (props.expenses.length === 0) {
        return <h2 className="expenses-list__fallback">No expense found!</h2>;
    }

    return (
        <ul className="expenses-list">
            {props.expenses.map(e =>
                <ExpenseItem
                    key={ e.id }
                    title={ e.title }
                    amount={ e.amount }
                    date={ e.date }>
                </ExpenseItem>
            ) }
        </ul>
    );
}

export default ExpensesList;