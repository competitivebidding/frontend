import React from 'react'
import AppHeader from '@widgets/header/AppHeader.js'
import Filter from '@feauters/filter/Filter.js'
import Search from '@feauters/search/Search.js'
import MyAuctionContent from '@widgets/my-auctions-content/MyAuctionContent.js'
import useNoAuth from '@shared/lib/useNoAuth.js'

enum Status {
  ACTIVE = 'active',
  END = 'end',
  WAIT = 'wait',
}

export interface IAuctionData {
  img: string,
  alt: string,
  name: string,
  date: string,
  price: string,
  places: number,
  status: Status,
  id: number,
}

const data: IAuctionData[] = [
  {
    img: '/src/pages/auctions/temporary-auctions-img/quare.png',
    alt: 'img',
    name: 'Apple Watch SE 44mm',
    date: '2023-04-06T15:12',
    price: '50',
    places: 12,
    status: Status.ACTIVE,
    id: 1,
  },
  {
    img: '/src/pages/auctions/temporary-auctions-img/quare.png',
    alt: 'img',
    name: 'iPhone 12 Pro 128 Gb',
    date: '2023-04-06T17:30',
    price: '86',
    places: 12,
    status: Status.END,
    id: 2,
  },
  {
    img: '/src/pages/auctions/temporary-auctions-img/quare.png',
    alt: 'img',
    name: '1 Bitcoin',
    date: '2023-04-06T17:30',
    price: '2458',
    places: 3,
    status: Status.WAIT,
    id: 3,
  },
  {
    img: '/src/pages/auctions/temporary-auctions-img/quare.png',
    alt: 'img',
    name: 'Vacuum Dyson',
    date: '2023-04-06T17:30',
    price: '98.3',
    places: 15,
    status: Status.ACTIVE,
    id: 4,
  },
  {
    img: '/src/pages/auctions/temporary-auctions-img/quare.png',
    alt: 'img',
    name: 'Hair Dryer Dyson',
    date: '2023-04-06T17:30',
    price: '85.9',
    places: 30,
    status: Status.ACTIVE,
    id: 5,
  },
  {
    img: '/src/pages/auctions/temporary-auctions-img/quare.png',
    alt: 'img',
    name: 'MacBook Pro M1 256 Gb',
    date: '2023-04-06T17:30',
    price: '183.9',
    places: 0,
    status: Status.END,
    id: 6,
  },
]

const MyAuctionsPage = () => {

  useNoAuth()

  return (
    <div className='auctions__components'>
      <div className='actions__search--card'>
        <Search onChange={() => console.log()} />

        <MyAuctionContent data={data} />
      </div>
      <Filter />
    </div>
  )
}

export default MyAuctionsPage
