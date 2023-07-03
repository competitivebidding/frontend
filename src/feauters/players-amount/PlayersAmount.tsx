import React from 'react'
import styles from './PlayersAmount.module.scss'
import DonutChart from "../../shared/ui/charts/DonutChart";
import {ChartData} from "chart.js";

function PlayersAmount() {

  const data: ChartData<'doughnut'> = {
    labels: ['Amount of players', 'Amount of partners', 'Amount of active partners per week', 'Total amount'],
    datasets: [
      {
        label: '',
        data: [10, 60, 42, 112],
        borderWidth: 0,
        backgroundColor: ['#00FFA3', '#2F53FF', '#ffffff', 'rgba(255, 255, 255, 0.2)'],
        circumference: 360,
        datalabels: {
          display: false,
        },
      },
    ],
  }

  return (
      <div className={styles.players}>
        <div className={styles.players__header}>
          <h3 className={styles.players__title}>My players</h3>
          <p className={styles.players__amount}>112 Total</p>
        </div>
        <div className={styles.players__body}>
          {data && (
              <ul className={styles.statistic}>
                {data.datasets[0].map((item, i) => (
                    <li key={i} className={styles.statistic__item} style={{ color: data.datasets[0].backgroundColor[i] }}>
                      <span>{item}</span>
                      <p>{data.labels[i]}</p>
                    </li>
                ))}
              </ul>
          )}
          <DonutChart data={data} count={10} haveTooltip />
        </div>
      </div>
  )
}

export default PlayersAmount
