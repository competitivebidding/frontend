import React from 'react';
import cls from './DonutChart.module.scss';
import { Chart as ChartJS, Tooltip, ArcElement, ChartData, PluginChartOptions, Plugin } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { AnyObject } from 'chart.js/dist/types/basic';
import { Chart } from 'chart.js/dist';

interface IDonutChartProps {
  data: ChartData<'doughnut'>;
  count: number;
  haveTooltip?: boolean;
  width?: number;
  height?: number;
}

interface IRoundRectParams {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  width: number;
  height: number;
  radius?: number | { tl: number; tr: number; br: number; bl: number };
  fill?: boolean;
  stroke?: boolean;
}

function roundRect({
  ctx,
  x,
  y,
  width,
  height,
  radius = 5,
  fill = false,
  stroke = true,
}: IRoundRectParams) {
  if (typeof radius === 'number') {
    radius = { tl: radius, tr: radius, br: radius, bl: radius };
  } else {
    radius = { ...{ tl: 0, tr: 0, br: 0, bl: 0 }, ...radius };
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

function DonutChart({
  data,
  count,
  haveTooltip = false,
  width = 300,
  height = 300,
}: IDonutChartProps) {
  ChartJS.register(ArcElement, Tooltip);
  ChartJS.defaults.elements.arc.borderWidth = 0;

  const customTooltip = {
    beforeRender: (chart:ChartJS) => {
      const ctx = chart.ctx as CanvasRenderingContext2D;
      const tooltip = chart.tooltip as any;

      if (tooltip && tooltip.dataPoints) {
        const tooltipData = tooltip.dataPoints[0] as any;
        const x = tooltipData.x;
        const y = tooltipData.y;
        const width = tooltip.width;
        const height = tooltip.height;

        ctx.strokeStyle = 'rgba(0, 0, 0, .5)';
        ctx.fillStyle = 'rgba(0, 0, 0, .5)';
        roundRect({ctx, x, y, width, height, radius: 8, fill: true});

        ctx.font = 'bolder 11px Arial';
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'left';
        ctx.fillText(tooltipData.title, x + 8, y + 25);
      }
    },
  };

  const plugins: any = [
    {
      id: 'qweqweqwe',
      afterUpdate: (chart: Chart) => {
        const arcs = chart.getDatasetMeta(0).data;
        arcs.forEach((arc: any) => {
          arc.round = {
            x: (chart.chartArea.left + chart.chartArea.right) / 2,
            y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
            radius: (arc.outerRadius + arc.innerRadius) / 2,
            thickness: (arc.outerRadius - arc.innerRadius) / 2,
            backgroundColor: arc.options.backgroundColor,
          };
        });
      },
      afterDraw: (chart: Chart) => {
        const ctx = chart.ctx as CanvasRenderingContext2D;
        const arcs = chart.getDatasetMeta(0).data;
        for (let i = 0; i < arcs.length - 1; i++) {
          const arc = arcs[0];

          const startAngle = Math.PI - arc.startAngle - Math.PI / 2;
          const angleEnd = Math.PI - arc.endAngle - Math.PI / 2;
          ctx.save();
          ctx.translate(arc.round.x, arc.round.y);
          ctx.fillStyle = arc.options.backgroundColor;
          ctx.beginPath();
          ctx.arc(
            arc.round.radius * Math.sin(startAngle),
            arc.round.radius * Math.cos(startAngle),
            arc.round.thickness,
            0,
            2 * Math.PI
          );
          ctx.closePath();
          ctx.fill();


ctx.fillStyle = arc.options.backgroundColor;
          ctx.beginPath();
          ctx.arc(
            arc.round.radius * Math.sin(angleEnd),
            arc.round.radius * Math.cos(angleEnd),
            arc.round.thickness,
            0,
            2 * Math.PI
          );
          ctx.closePath();
          ctx.fill();

          ctx.restore();

          const arcEl = arcs[i];

          const angleEndEl = Math.PI - arcEl.endAngle - Math.PI / 2;
          ctx.save();
          ctx.translate(arcEl.round.x, arcEl.round.y);

          ctx.fillStyle = arcEl.options.backgroundColor;
          ctx.beginPath();
          ctx.arc(
            arcEl.round.radius * Math.sin(angleEndEl),
            arcEl.round.radius * Math.cos(angleEndEl),
            arcEl.round.thickness,
            0,
            2 * Math.PI
          );
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }
      },
    },
    haveTooltip  && customTooltip,
  ];

  const options = {
    plugins: {
      tooltip: {
        enabled: false, 
      },
    },
    cutout: '80%',
  };

  return (
    <div className={cls.donut} style={{ width: `${width}px`, height: `${height}px` }}>
      <Doughnut options={options} data={data} plugins={plugins} />
      <p className={cls.donut__amount}>{count.toFixed(2)}</p>
    </div>
  );
}

export default DonutChart;