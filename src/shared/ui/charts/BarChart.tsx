import React from 'react';
import styles from './Income.module.scss';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import   { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    ChartData, ChartOptions
} from 'chart.js';

interface IBarChartProps {
    color: string;
    data: ChartData<'bar'>;
}

const BarChart = ({ color, data }: IBarChartProps) => {
    ChartJS.register(
        BarElement,
        CategoryScale,
        LinearScale,
        Tooltip,
        ChartDataLabels
    );

    const plugin = [
        BarElement,
        CategoryScale,
        LinearScale,
        Tooltip,
        ChartDataLabels,
    ];

    const options: ChartOptions<'bar'> = {
        responsive: true,
        scales: {
            y: {
                min: 0,
                max: 50000,
                ticks: {
                    stepSize: 10000,
                    color: 'rgba(255, 255, 255, 0.2)',
                },
            },
            x: {
                ticks: {
                    color: 'rgba(255, 255, 255, 0.2)',
                },
            },
        },
        backgroundColor: color,
        plugins: {
            datalabels: {
                color: color,
            },
        },
    };

    return (
        <div className={styles.chart}>
            <Bar data={data} options={options} plugins={plugin} />
        </div>
    );
};

export default BarChart;
