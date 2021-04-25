import styles from './ExpenseDate.module.scss';

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className={ styles.ExpenseDate }>
            <div className={ styles.Month }>{ month }</div>
            <div className={ styles.Year }>{ year }</div>
            <div className={ styles.Day }>{ day }</div>
        </div>
    );
}

export default ExpenseDate;