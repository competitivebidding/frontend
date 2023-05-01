import React from 'react';
import styles from './DonutChart.module.scss'
import { Chart } from 'react-chartjs-2';
import {BarElement, CategoryScale, Chart as ChartJS, LinearScale, Tooltip, ArcElement} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Doughnut } from 'react-chartjs-2';



function DonutChart({chart, data}) {
    ChartJS.register(ArcElement)

    const plugin = {
        responsive: true,
        maintainAspectRatio: false,
    }

    const options = {
        responsive: true,
        cutout: 50,
        maintainAspectRatio: false,
        backdropColor: '#ffffff'
    }

    return (
        <div className={styles.donut}>
            <Doughnut
                options={options}
                data={data}
                plugins={plugin}
            />
            <p className={styles.donut__amount}>112</p>
        </div>
    );
}

export default DonutChart;
