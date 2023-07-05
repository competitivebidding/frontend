import './AuctionsPage.scss'
import React, { useEffect, useState } from 'react'
import Filter from '@features/filter/Filter'
import Search from '@features/search/Search'
import AuctionsPageContent from '@entities/auction/ui/auction-page-content/AuctionsPageContent'


const MyAuctionsPage = () => {


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
