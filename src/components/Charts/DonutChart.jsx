import React from 'react';
import styles from './DonutChart.module.scss'

function DonutChart({chart}) {
    return (
        <div className={styles.donut}>
            <img src={chart} alt="donut"/>
            <p className={styles.donut__amount}>112</p>
        </div>
    );
}

export default DonutChart;
