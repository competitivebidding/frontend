import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PieChart({ chartData, plugins, options }) {
    return <Pie data={chartData} plugins={plugins} options={options}/>;
}

export default PieChart;
