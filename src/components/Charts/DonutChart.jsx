import React from 'react';
import styles from './DonutChart.module.scss'
import { Chart } from 'react-chartjs-2';
import {BarElement, CategoryScale, Chart as ChartJS, LinearScale, Tooltip, ArcElement} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Doughnut,  } from 'react-chartjs-2';



function DonutChart({data, width = 300, height = 300}) {

    ChartJS.register(ArcElement)
    ChartJS.defaults.elements.arc.borderWidth = 0;
    ChartJS.defaults.datasets.doughnut.cutout = '80%'

    const plugins = [{
        afterUpdate: function(chart) {
            const arcs = chart.getDatasetMeta(0).data;

            arcs.forEach(function(arc) {
                arc.round = {
                    x: (chart.chartArea.left + chart.chartArea.right) / 2,
                    y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
                    radius: (arc.outerRadius + arc.innerRadius) / 2,
                    thickness: (arc.outerRadius - arc.innerRadius) / 2,
                    backgroundColor: arc.options.backgroundColor
                }
            });
        },
        afterDraw: (chart) => {
            const {
                ctx,
                canvas
            } = chart;
            const arcs = chart.getDatasetMeta(0).data;

            chart.getDatasetMeta(0).data.forEach((arc, i) => {

                const startAngle = Math.PI / 2 - arc.startAngle;
                const endAngle = Math.PI / 2 - arc.endAngle;

                ctx.save();
                ctx.translate(arc.round.x, arc.round.y);

                ctx.fillStyle = arc.options.backgroundColor;
                ctx.beginPath();
                ctx.arc(arc.round.radius * Math.sin(endAngle), arc.round.radius * Math.cos(endAngle), arc.round.thickness, 0, 2 * Math.PI);
                ctx.arc(arc.round.radius * Math.sin(Math.PI), arc.round.radius * Math.cos(Math.PI), arc.round.thickness, 0, 2 * Math.PI)
                ctx.closePath();
                ctx.fill();

                ctx.restore();
            });
        }
        }]

    const options = {
        domain: [0, 100],
        trackColor: '#f0f8ff',
        backdropColor: '#ffffff',
        legend: {
            position: 'left',
            display: false,
        },

    }

    return (
        <div className={styles.donut} style={{width: `${width}px`, height:`${height}px`}}>
            <Doughnut
                options={options}
                data={data}
                plugins={plugins}
            />
            <p className={styles.donut__amount}>112</p>
        </div>
    );
}

export default DonutChart;
