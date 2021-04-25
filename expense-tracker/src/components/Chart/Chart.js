import styles from './Chart.module.scss';
import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dp => dp.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className={ styles.chart }>
            { props.dataPoints.map(dp =>
                <ChartBar
                    key={ dp.label }
                    value={ dp.value }
                    max={ totalMaximum }
                    label={ dp.label }>

                </ChartBar>
            ) }
        </div>
    );
}

export default Chart;