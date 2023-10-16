import React from 'react'
import donut from '@assets/Partners/donut.svg'
import styles from './PlayersAmount.module.scss'
import { useTranslation } from 'react-i18next'

function PlayersAmount() {
  const { t } = useTranslation('playersAmount')

  const data = {
    labels: ['Amount of players', 'Amount of partners', 'Amount of active partners per week'],
    datasets: [
      {
        label: '',
        data: [6, 3, 1, 112],
        borderWidth: 0,
        backgroundColor: ['#00FFA3', '#2F53FF', '#ffffff'],
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
        <ul className={styles.statistic}>
          <li className={styles.statistic__item}>
            <span>112</span>
            <br />
            <p>{t('Total amount')}</p>
          </li>
          <li className={styles.statistic__item + ' ' + styles.statistic__item_green}>
            <span>6</span>
            <br />
            <p>{t('Amount of players')}</p>
          </li>
          <li className={styles.statistic__item + ' ' + styles.statistic__item_blue}>
            <span>3</span>
            <br />
            <p>{t('Amount of partners')}</p>
          </li>
          <li className={styles.statistic__item + ' ' + styles.statistic__item_white}>
            <span>1</span>
            <br />
            <p>{t('Amount of active partners per week')}</p>
          </li>
        </ul>
        {/*<DonutChart chart={donut} data={data}/>*/}
      </div>
    </div>
  )
}

export default PlayersAmount
