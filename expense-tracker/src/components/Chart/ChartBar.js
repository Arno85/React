import styles from './ChartBar.module.scss';

const ChartBar = (props) => {
    let barFillHeight = '0%';

    if (props.value > 0) {
        barFillHeight = Math.round((props.value / props.max) * 100) + '%';
    }

    return (
        <div className={ styles.chartBar }>
            <div className={ styles.inner }>
                <div className={ styles.fill } style={ { height: barFillHeight } }></div>
            </div>
            <div className={ styles.label }>{ props.label }</div>
        </div>
    );
}

export default ChartBar;