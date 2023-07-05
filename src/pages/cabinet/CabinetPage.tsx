import React from 'react'
import AppHeader from '@/widgets/header/AppHeader.jsx'
import PlayersAmount from "@features/players-amount/PlayersAmount";
import { rotoIncome } from '@/shared/charts-data/RotoIncome'
import DoubleIncome from '@features/double-income/DoubleIncome'
import { rublesIncome } from '@/shared/charts-data/RublesIncome'
import {AuctionsInfo} from "@/entities/user/ui/user-info";
import {UserInfoCabinet} from '@/entities/user';
import useNoAuth from '@shared/lib/useNoAuth';
import './CabinetPage.scss'

const CabinetPage = () => {
  const auctions = 0
  // const auctions = {}

  useNoAuth()

  return (
    <div className='cabinet'>
      <UserInfoCabinet />
      <AuctionsInfo amount={12} rotoSpent={10} winsSum={400000} wins={5} auctions={auctions} />
      <div className='cabinet__charts'>
        <PlayersAmount />
        <DoubleIncome currency={['ROTO', 'Rubles']} data={[rotoIncome, rublesIncome]} color={['#2F53FF', '#00FFA3']} />
      </div>
    </div>
  )
}

export default CabinetPage
