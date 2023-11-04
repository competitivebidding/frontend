import cls from './AuctionsPage.module.scss'
import React, { useEffect, useState } from 'react'
import Filter from '@features/filter/Filter'
import Search from '@features/search/Search'
import {AuctionsPageContent} from '@entities/auction/ui/auction-page-content/AuctionsPageContent'

const MyAuctionsPage = () => {
  return (
    <>
      <div className={cls.auctions__components}>
        <div className={cls['auctions__search--card']}>
          <Search onChange={() => console.log()} />
          <AuctionsPageContent />
        </div>
        <Filter />
      </div>
    </>
  )
}

export default MyAuctionsPage
