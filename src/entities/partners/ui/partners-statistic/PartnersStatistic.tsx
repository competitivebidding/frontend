import React from 'react'
import styles from '@/entities/partners/ui/partners-statistic/PartnersStatistic.module.scss'
import PlayersAmount from '@/entities/partners/ui/players-amount/PlayersAmount'
import Income from '@/shared/ui/charts/Income'

import { rotoIncome } from '@/shared/charts-data/RotoIncome'
import { rublesIncome } from '@/shared/charts-data/RublesIncome'

import BestInviters from '@/entities/partners/ui/partners-statistic/ui/best-inviters/BestInviters'
import LastPays from '@/entities/partners/ui/last-pays/LastPays'
import PartnersLists from '@/entities/partners/ui/partners-statistic/ui/partners-list/PartnersLists'

export function PartnersStatistic() {
  return (
    <div className={styles.statistic}>
      <PlayersAmount />
      <BestInviters />

      <Income currency={'ROTO'} data={rotoIncome} color={'#2F53FF'} />
      <Income currency={'Rubles'} data={rublesIncome} color={'#00FFA3'} />

      <div className={styles.statistic__list_container}>
        <LastPays />
      </div>
      <PartnersLists />
    </div>
  )
}
