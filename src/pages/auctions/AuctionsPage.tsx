import cls from './AuctionsPage.module.scss'
import React, {useState} from 'react'
import Filter from '@features/filter/Filter'
import Search from '@features/search/Search'
import {AuctionsPageContent} from '@entities/auction/ui/auction-page-content/AuctionsPageContent'
import {useQuery} from "@apollo/client";
import {GET_AUCTIONS} from "@shared/schemas/auctions/auctions";
import {useDebounce} from "@shared/lib/hooks/useDebounce";

const MyAuctionsPage = () => {
    const [searchValue, setSearchValue] = useState('')
    const debouncedValue = useDebounce(searchValue)
  return (
    <>
      <div className={cls.auctions__components}>
        <div className={cls['auctions__search--card']}>
          <Search onChange={(value) => setSearchValue(value) } />
          <AuctionsPageContent searchValue={debouncedValue} />
        </div>
        <Filter />
      </div>
    </>
  )
}

export default MyAuctionsPage
