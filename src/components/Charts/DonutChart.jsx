import React from 'react';
import styles from './DonutChart.module.scss'
import {
    Chart as ChartJS,
    Tooltip,
    ArcElement,
} from "chart.js";
import { Doughnut } from 'react-chartjs-2';


function DonutChart({data, count, width = 300, height = 300}) {

    ChartJS.register(ArcElement, Tooltip)
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
            // ctx.globalCompositeOperation='multiply';
            const arcs = chart.getDatasetMeta(0).data
            for (let i = 0; i < arcs.length; i++) {
                let arc = arcs[0]

                const startAngle = Math.PI - arc.startAngle - Math.PI / 2;
                const angleEnd = Math.PI - arc.endAngle - Math.PI / 2;
                ctx.save();
                ctx.translate(arc.round.x, arc.round.y);
                ctx.fillStyle = arc.options.backgroundColor;
                ctx.beginPath();
                ctx.arc(arc.round.radius * Math.sin(startAngle), arc.round.radius * Math.cos(startAngle), arc.round.thickness, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();

                ctx.fillStyle = arc.options.backgroundColor;
                ctx.beginPath();
                ctx.arc(arc.round.radius * Math.sin(angleEnd), arc.round.radius * Math.cos(angleEnd), arc.round.thickness, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();

                ctx.restore();

                let arcEl = arcs[i]

                const angleEndEl = Math.PI - arcEl.endAngle - Math.PI / 2;
                ctx.save();
                ctx.translate(arcEl.round.x, arcEl.round.y);

                ctx.fillStyle = arcEl.options.backgroundColor;
                ctx.beginPath();
                ctx.arc(arcEl.round.radius * Math.sin(angleEndEl), arcEl.round.radius * Math.cos(angleEndEl), arcEl.round.thickness, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();

                ctx.restore();
            }

        },
        },

    ]
    const options = {
        legend: {
            position: 'left',
            display: false,
        },
        plugins: {
            tooltip: {
                position: 'nearest',
                enabled: false,
                callbacks: {
                    title: function(tooltipItem) {
                        return tooltipItem.title;
                    },
                    label: function(tooltipItem) {
                        return tooltipItem.dataset.label;
                    },

                },
                backgroundColor: '#24384a',
                titleFontSize: 16,
                titleFontColor: '#0066ff',
                bodyFontColor: '#000',
                bodyFontSize: 14,
                displayColors: false,
                zIndex: 999
            }
        }

    }

    return (
        <div className={styles.donut} style={{width: `${width}px`, height:`${height}px`}}>
                <Doughnut
                    options={options}
                    data={data}
                    plugins={plugins}
                />
                <p className={styles.donut__amount}>{count}</p>
        </div>
    );
}

export default DonutChart;
