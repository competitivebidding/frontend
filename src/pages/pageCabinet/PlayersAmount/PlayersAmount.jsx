import React from 'react';
import DonutChart from "@/components/Charts/DonutChart.jsx";
import styles from './PlayersAmount.module.scss';

function PlayersAmount(props) {
    const data = {
        labels: ['Amount of players', 'Amount of partners', 'Amount of active partners per week', 'Total'],
        datasets: [{
            label: '',
            data: [10, 60, 42, 112],
            borderWidth: 0,
            backgroundColor: [
                '#00FFA3',
                '#2F53FF',
                '#ffffff',
                'rgba(255, 255, 255, 0.2)',
            ],
            circumference: 360,
            datalabels: {
                display: false
            },
        },
            ]
    }

    return (
        <div className={styles.players}>
            <div className={styles.players__header}>
                <h3 className={styles.players__title}>My players</h3>
                <p className={styles.players__amount}>112 total</p>
            </div>
            <div className={styles.players__body}>
                <ul className={styles.statistic}>
                    <li className={styles.statistic__item}><span>112</span><br/><p>Total amount</p></li>
                    <li className={styles.statistic__item  + ' ' + styles.statistic__item_green}><span>6</span><br/><p>Amount of players</p></li>
                    <li className={styles.statistic__item  + ' ' + styles.statistic__item_blue}><span>3</span><br/><p>Amount of partners</p></li>
                    <li className={styles.statistic__item  + ' ' + styles.statistic__item_white}><span>1</span><br/><p>Amount of active partners per week</p></li>
                </ul>
                <DonutChart data={data}/>
            </div>
        </div>
    );
}

export default PlayersAmount;
