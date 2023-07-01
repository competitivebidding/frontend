import React, {useEffect, useState} from 'react'
import AppHeader from '../../widgets/header/AppHeader.jsx'

import Filter from '../../feauters/filter/Filter'
import Search from '../../feauters/search/Search.js'

import './AuctionsPage.scss'
import {useQuery} from "@apollo/client";


import { AuctionsPageContent } from '../../entities/auction'
import { GET_AUCTIONS } from '../../shared/schemas/auctions/auctions'




export const MyAuctionsPage = ({ title }) => {
  // эмитация данных с бэка


  const [auctData, setAuctData] = useState(undefined)

  const {data: {getAuction}, loading} = useQuery(GET_AUCTIONS)
  console.log(auctData)

  useEffect(() => {
    if (!loading) {
      setAuctData(getAuction)
    }
  }, [getAuction]);

  return (
    <>
      <AppHeader title={title} />

      <div className='auctions__components'>
        <div className='auctions__search--card'>
          <Search />

          {<AuctionsPageContent data={auctData}/>}
        </div>
        <Filter />
      </div>
    </>
  )
}

export default MyAuctionsPage
