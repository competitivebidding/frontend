import React, {useState} from 'react';
import styles from '../Income.module.scss';
import {Bar} from "react-chartjs-2";
import {UserData} from "@/pages/pagePartnerProgram/Statistic/Sklad govna/Data";

function BarChart({color, currency, data}) {
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

    return (
        <div className={styles.chart}>
            <Bar chartData={registrations}/>
        </div>
    );
}

export default BarChart;
