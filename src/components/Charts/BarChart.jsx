import React, {useEffect, useState} from 'react';
import styles from '../../pages/pagePartnerProgram/Statistic/Income.module.scss';
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
                    stepSize: 10000,
                    color: "rgba(255, 255, 255, 0.2)"
                },
            },
            x: {
                ticks: {
                    color: "rgba(255, 255, 255, 0.2)"
                },
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
