import React from 'react'
import MyAuctionContent from '@widgets/my-auctions-content/MyAuctionContent.js'
import useNoAuth from '@shared/lib/useNoAuth.js'
import Search from '@features/search/Search'
import Filter from '@features/filter/Filter'
import cls from './MyAuctionsPage.module.scss'

enum Status {
  ACTIVE = 'active',
  END = 'end',
  WAIT = 'wait',
}

export interface IAuctionData {
  img: string
  alt: string
  name: string
  date: string
  price: string
  places: number
  status: Status
  id: number
}


const MyAuctionsPage = () => {
  useNoAuth()

  return (
    <div className={cls.auctions__components}>
      <div className={cls['actions__search--card']}>
        <Search onChange={() => console.log()} />
        <MyAuctionContent />
      </div>
      <Filter />
    </div>
  )
}





export default MyAuctionsPage
