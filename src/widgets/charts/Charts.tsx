import React from 'react'
import styles from './Charts.module.scss'
import { rotoIncome } from '@shared/charts-data/RotoIncome'
import Income from '../../shared/ui/charts/Income'
import PlayersAmount from '@features/players-amount/PlayersAmount'

function Charts() {
  return (
    <div className={styles.charts_list}>
      <PlayersAmount />
      <Income currency={'ROTO'} data={rotoIncome} color={'#2F53FF'} />
    </div>
  )
}

export default Charts
