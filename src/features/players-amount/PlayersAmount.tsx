import React from 'react'
import styles from './PlayersAmount.module.scss'
import DonutChart from '../../shared/ui/charts/DonutChart'
import { ChartData, ChartDataset } from 'chart.js'
import { useTranslation } from 'react-i18next'

interface IData {
  label: string
  data: number[]
  borderWidth: number
  backgroundColor: string[]
  circumference: number
  datalabels: {
    display: boolean
  }
}

function PlayersAmount() {
  const colors = ['#00FFA3', '#2F53FF', '#ffffff', 'rgba(255, 255, 255, 0.2)']
  const { t } = useTranslation('playersAmount')

  const data: ChartData<'doughnut', number[], string> = {
    labels: [
      t('Amount of players'),
      t('Amount of partners'),
      t('Amount of active partners per week'),
      t('Total amount')
    ],
    datasets: [
      {
        label: '',
        data: [10, 60, 42, 112],
        borderWidth: 0,
        backgroundColor: colors,
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
        <h3 className={styles.players__title}>{t('My players')}</h3>
        <p className={styles.players__amount}>112 {t('total')}</p>
      </div>
      <div className={styles.players__body}>
        {data && (
          <ul className={styles.statistic}>
            {data.datasets[0].data.map((item: number, i: number) => (
              <li key={i} className={styles.statistic__item} style={{ color: colors[i] }}>
                <span>{item}</span>
                <p>{data.labels && data.labels[i]}</p>
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
