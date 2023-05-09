import React from 'react'
import {createPortal} from 'react-dom'
import AppHeader from '../../components/appHeader/AppHeader.jsx'
import PlayersAmount from "./PlayersAmount/PlayersAmount";
import RotoIncome from '@/pages/pageCabinet/ChartsData/RotoIncome'
import DoubleIncome from '@/pages/pageCabinet/DoubleIncome'
import RublesIncome from '@/pages/pageCabinet/ChartsData/RublesIncome'
import AuctionsInfo from "./AuctionsInfo/AuctionsInfo";
import UserInfo from "./UserInfo/UserInfo";

import './CabinetPage.scss'
import {PaymentModal} from "./PaymentModal/PaymentModal";

const CabinetPage = ({ title }) => {
  const auctions = {

  }

  //TODO: тут как-то аукционы хуйнуть

  return (
    <div className='cabinet'>
      <AppHeader title={title} />
     <UserInfo />
      <AuctionsInfo amount={12} rotoSpent={10} winsSum={400000} wins={5} auctions={auctions} />
      <div className='cabinet__charts'>
        <PlayersAmount />
        <DoubleIncome currency={['ROTO', 'Rubles']} data={[RotoIncome, RublesIncome]} color={['#2F53FF', '#00FFA3']} />
      </div>
    </div>
  )
}

export default CabinetPage
