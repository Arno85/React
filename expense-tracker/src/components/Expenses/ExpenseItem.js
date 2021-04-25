import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import styles from './ExpenseItem.module.scss';

const ExpenseItem = (props) => {
    return (
        <li>
            <Card className={ styles.expenseItem }>
                <ExpenseDate date={ props.date }></ExpenseDate>
                <div className={ styles.description }>
                    <h2>{ props.title }</h2>
                    <div className={ styles.price }>${ props.amount }</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;