import React, {useEffect, useState} from 'react'
import AppHeader from '../../components/appHeader/AppHeader.jsx'

import CardsAuctions from './auctionCards/CardAuctions.jsx'
import Filter from './filter/Filter.jsx'
import Search from './search/Search.jsx'

import './AuctionsPage.scss'
import {useQuery} from "@apollo/client";
import {GET_AUCTIONS} from "../../components/server/auctions";

const MyAuctionsPage = ({ title }) => {
  // эмитация данных с бэка


  const [auctData, setAuctData] = React.useState(null)

  const {data, loading} = useQuery(GET_AUCTIONS)
  console.log(auctData)

  useEffect(() => {
    if (!loading) {
      setAuctData(data.getAuctions)
    }
  }, [data]);

  return (
    <>
      <AppHeader title={title} />

      <div className='auctions__components'>
        <div className='auctions__search--card'>
          <Search />

          {<CardsAuctions data={auctData}/>}
        </div>
        <Filter />
      </div>
    </>
  )
}

export default MyAuctionsPage
