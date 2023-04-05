import {useState} from "react";
import "../Statistic.module.scss";
import PieChart from "./PieChart.jsx";
import {UserData} from "./Data.js";

function ChartsContainer() {
    const [registrations, setRegistrations] = useState({
        labels: UserData.map((data) => {
            return data.label
        }),
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
                cutout: '70%',
            },
        ],
    });

    const textCenter = {
        id: 'textCenter',
        beforeDatasetDraw(chart, args, options) {
            const {ctx, data} = chart;

            ctx.save();
            ctx.font = '28px sans-serif';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
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
            },
        }

    }

    //const [incomeRoto, setIncomeRoto] = useState(0);

    //const [incomeRubles, setIncomeRubles] = useState(0);


    return (
        <div className="container">
            <div style={{width: "400px", height: "333px"}}>
                <PieChart
                    chartData={registrations}
                    plugins={[textCenter]}
                    options={options}
                />
            </div>
            <div style={{ width: "fit-content" }}>
                <BarChart chartData={incomeRoto} />
            </div>
            <div style={{ width: "fit-content" }}>
                <BarChart chartData={incomeRubles} />
            </div>
        </div>
    );
}

//вертел на хуе того кто эти графики делал

export default ChartsContainer;
