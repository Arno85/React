import ExpenseItem from './ExpenseItem';
import styles from './ExpensesList.module.scss';

const ExpensesList = (props) => {
    if (props.expenses.length === 0) {
        return <h2 className="expenses-list__fallback">No expense found!</h2>;
    }

    return (
        <ul className={ styles.expensesList }>
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