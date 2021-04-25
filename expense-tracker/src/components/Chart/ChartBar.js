import styles from './ChartBar.module.scss';

const ChartBar = (props) => {
    let barFillHeight = '0%';

    if (props.value > 0) {
        barFillHeight = Math.round((props.value / props.max) * 100) + '%';
    }

    return (
        <div className={ styles.ChartBar }>
            <div className={ styles.Inner }>
                <div className={ styles.Fill } style={ { height: barFillHeight } }></div>
            </div>
            <div className={ styles.Label }>{ props.label }</div>
        </div>
    );
}

export default ChartBar;