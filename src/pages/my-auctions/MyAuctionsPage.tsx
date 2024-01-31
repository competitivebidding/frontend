import React, {useState} from 'react'
import MyAuctionContent from '@widgets/my-auctions-content/MyAuctionContent.js'
import useNoAuth from '@shared/lib/useNoAuth.js'
import Search from '@features/search/Search'
import Filter from '@features/filter/Filter'
import cls from './MyAuctionsPage.module.scss'
import {useDebounce} from "@shared/lib/hooks/useDebounce";

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
  const [searchValue, setSearchValue] = useState('')
  const debouncedValue = useDebounce(searchValue)
  return (
    <div className={cls.auctions__components}>
      <div className={cls['actions__search--card']}>
        <Search onChange={(value) => setSearchValue(value)} />
        <MyAuctionContent  searchValue={debouncedValue}/>
      </div>
      <Filter />
    </div>
  )
}





export default MyAuctionsPage
