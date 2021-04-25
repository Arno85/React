import styles from './ExpensesFilter.module.scss';

const ExpensesFilter = (props) => {
    return (
        <div className={ styles.expensesFilter }>
            <div className={ styles.control }>
                <label>Filter by year</label>
                <select onChange={ (evt) => props.onFilter(+evt.target.value) } value={ props.year }>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;