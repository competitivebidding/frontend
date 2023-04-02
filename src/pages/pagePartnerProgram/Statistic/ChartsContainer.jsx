import { useState } from "react";
import "./Statistic.scss";
import PieChart from "./Charts/PieChart.jsx";
import { UserData } from "./Charts/Data.js";

function ChartsContainer() {
    const [registrations, setRegistrations] = useState({
        labels: UserData.map((data) => data.label),
        datasets: [
            {
                type: 'doughnut',
                data: UserData.map((data) => data.amount),
                backgroundColor: [
                    "#00FFA3",
                    "#2F53FF",
                    "#FFFFFF",
                    "rgba(255, 255, 255, 0.12)",
                ],
                borderColor: "transparent",
                borderWidth: 2,
                borderRadius: 19.5506,
                cutout: 65,
            },
        ],
    });

    const textCenter = {
        id: 'textCenter',
        beforeDatasetDraw(chart, args, options) {
            const { ctx, data } = chart;

            ctx.save();
            ctx.font = 'normal 28px sans-serif';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.fillText(
                data.datasets[0].data[data.datasets[0].data.length - 1],
                chart.getDatasetMeta(0).data[0].x,
                chart.getDatasetMeta(0).data[0].y
            )
        }
    }

    const options = {
        plugins: {
            legend: {
                position: 'left',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                }
            }
        }

    }

    //const [incomeRoto, setIncomeRoto] = useState(0);

    //const [incomeRubles, setIncomeRubles] = useState(0);

    // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

    return (
        <div className="container">
            <div style={{ width: "400px", height: "400px" }}>
                <PieChart
                    chartData={registrations}
                    plugins={[textCenter]}
                    options={options}
                />
            </div>
            {/*<div style={{ width: "fit-content" }}>*/}
            {/*    <BarChart chartData={incomeRoto} />*/}
            {/*</div>*/}
            {/*<div style={{ width: "fit-content" }}>*/}
            {/*    <BarChart chartData={incomeRubles} />*/}
            {/*</div>*/}
        </div>
    );
}

export default ChartsContainer;
