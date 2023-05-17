import React from 'react';
import './DonutChart.scss'
import {
    Chart as ChartJS,
    Tooltip,
    ArcElement,
} from "chart.js";
import { Doughnut } from 'react-chartjs-2';

function roundRect(
    ctx,
    x,
    y,
    width,
    height,
    radius = 5,
    fill = false,
    stroke = true
) {
    if (typeof radius === 'number') {
        radius = {tl: radius, tr: radius, br: radius, bl: radius};
    } else {
        radius = {...{tl: 0, tr: 0, br: 0, bl: 0}, ...radius};
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    if (fill) {
        ctx.fill();
    }
    if (stroke) {
        ctx.stroke();
    }
}

 function DonutChart({data, count, width = 300, height = 300}) {

    ChartJS.register(ArcElement, Tooltip)
    ChartJS.defaults.elements.arc.borderWidth = 0;
    ChartJS.defaults.datasets.doughnut.cutout = '80%'

     const customTooltip = {
        id: 'customTooltip',

         afterDraw(chart, args, options) {
            const { ctx,  chartArea, tooltip, scales } = chart
             tooltip.fillStyle = 'rgba(0, 0, 0, .4)'
             ctx.rounded = true

             if (tooltip._active[0] && tooltip.dataPoints[0]) {
                 ctx.strokeStyle = "rgba(0, 0, 0, .5)";
                 ctx.fillStyle = "rgba(0, 0, 0, .5)";
                 roundRect(ctx, tooltip.x, tooltip.y, tooltip.width, tooltip.height, 8, true)

                 ctx.font = 'bolder 11px Arial'
                 ctx.fillStyle = '#fff'
                 ctx.textAlign = 'left'
                 ctx.fillText(tooltip.title, tooltip.x + 8, tooltip.y + 25)
             }
         }
     }

    const plugins = [
        {
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
            for (let i = 0; i < arcs.length - 1; i++) {
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
        customTooltip
        ]



    const options = {
        legend: {
            position: 'left',
            display: false,
        },
        plugins: {
            tooltip: {
                position: 'average',
                enabled: true,
                filter: (tooltip) => tooltip.dataIndex !== 3,

                backgroundColor: 'transparent',
                titleColor: 'transparent',
                bodyColor: 'transparent',
                displayColors: false,
                boxWidth: 0,
                // xAlign: 'left',
                // yAlign: undefined
            }
        },
        // onHover: (event, chartElement) => {
        //     console.log(chartElement)
        // },


    }

    return (
        <div className='donut' style={{width: `${width}px`, height:`${height}px`}}>
                <Doughnut
                    options={options}
                    data={data}
                    plugins={plugins}
                />
                <p className='donut__amount'>{count}</p>
        </div>
    );
}

export default DonutChart



