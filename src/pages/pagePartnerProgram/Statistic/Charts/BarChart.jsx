import React, {useEffect, useState} from 'react';
import styles from '../Income.module.scss';
import {Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
} from "chart.js";

function BarChart({color, data}) {

    ChartJS.register(
        BarElement,
        CategoryScale,
        LinearScale,
        Tooltip,
        ChartDataLabels
    )

    const plugin = {
        responsive: true,
        maintainAspectRatio: false,
    }

    const options = {
        scales: {
            y: {
                min: 0,
                max: 50000,
                ticks: {
                    stepSize: 10000
                }
            }
        },
        backgroundColor: `${color}`,
        plugins: {
            datalabels: {
                color: `${color}`,
            },
        }
    }

    return (
        <div className={styles.chart}>
            <Bar data={data} options={options} plugins={plugin}/>
        </div>
    );
}

export default BarChart;
