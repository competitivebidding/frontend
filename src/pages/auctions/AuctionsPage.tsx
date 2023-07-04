import './AuctionsPage.scss'
import { useQuery } from '@apollo/client'
import React, { FC, useEffect, useState } from 'react'
import { GET_AUCTIONS } from '@/shared/schemas/auctions/auctions'
import Filter from '../../feauters/filter/Filter.js'
import Search from '../../feauters/search/Search.js'
import AppHeader from '../../widgets/header/AppHeader.jsx'
import { GetAuctionsDocument } from '@shared/lib/types/__generated-types__/graphql'
import AuctionsPageContent from '@entities/auction/ui/auction-page-content/AuctionsPageContent'


const MyAuctionsPage = () => {
  // эмитация данных с бэка
  return (
    <>
      <div className='auctions__components'>
        <div className='auctions__search--card'>
          <Search onChange={() => console.log()} />

          <AuctionsPageContent />
        </div>
        <Filter />
      </div>
    </>
  )
}

export default MyAuctionsPage
