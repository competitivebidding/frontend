import React from 'react'
import PlayersAmount from '@features/players-amount/PlayersAmount'
import {rotoIncome} from '@/shared/charts-data/RotoIncome'
import DoubleIncome from '@features/double-income/DoubleIncome'
import {AuctionsInfo} from '@/entities/user/ui/user-info'
import {UserInfoCabinet} from '@/entities/user'
import useNoAuth from '@shared/lib/useNoAuth'
import cls from './CabinetPage.module.scss'

const CabinetPage = () => {
  const auctions = 0
  // const auctions = {}

  useNoAuth()

  return (
    <div className={cls.cabinet}>
      <UserInfoCabinet />
      <AuctionsInfo amount={12} rotoSpent={10} winsSum={400000} wins={5} auctions={auctions} />
      <div className={cls.cabinet__charts}>
        <PlayersAmount />
        <DoubleIncome currency={['ROTO', 'Rubles']} data={[rotoIncome]} color={['#2F53FF', '#00FFA3']} />
      </div>
    </div>
  )
}

export default CabinetPage
