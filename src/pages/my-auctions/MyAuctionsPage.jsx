import React from 'react'
import AppHeader from '../../widgets/header/AppHeader.jsx'
import Filter from '../../feauters/filter/Filter.tsx'
import Search from '../../feauters/search/Search.tsx'
import MyAuctionContent from '../../widgets/my-auctions-content/MyAuctionContent.jsx'
import useNoAuth from '../../shared/lib/useNoAuth.ts';

const data = [
  {
    img: '/src/pages/auctions/temporary-auctions-img/quare.png',
    alt: 'img',
    name: 'Apple Watch SE 44mm',
    date: '2023-04-06T15:12',
    price: '50',
    places: 12,
    status: 'active',
    id: 1,
  },
  {
    img: '/src/pages/auctions/temporary-auctions-img/quare.png',
    alt: 'img',
    name: 'iPhone 12 Pro 128 Gb',
    date: '2023-04-06T17:30',
    price: '86',
    places: 12,
    status: 'end',
    id: 2,
  },
  {
    img: '/src/pages/auctions/temporary-auctions-img/quare.png',
    alt: 'img',
    name: '1 Bitcoin',
    date: '2023-04-06T17:30',
    price: '2458',
    places: 3,
    status: 'wait',
    id: 3,
  },
  {
    img: '/src/pages/auctions/temporary-auctions-img/quare.png',
    alt: 'img',
    name: 'Vacuum Dyson',
    date: '2023-04-06T17:30',
    price: '98.3',
    places: 15,
    status: 'active',
    id: 4,
  },
  {
    img: '/src/pages/auctions/temporary-auctions-img/quare.png',
    alt: 'img',
    name: 'Hair Dryer Dyson',
    date: '2023-04-06T17:30',
    price: '85.9',
    places: 30,
    status: 'active',
    id: 5,
  },
  {
    img: '/src/pages/auctions/temporary-auctions-img/quare.png',
    alt: 'img',
    name: 'MacBook Pro M1 256 Gb',
    date: '2023-04-06T17:30',
    price: '183.9',
    places: 0,
    status: 'end',
    id: 6,
  },
]

const MyAuctionsPage = ({ title }) => {

  useNoAuth()

  return (
    <>
      <AppHeader title={title} />

      <div className='auctions__components'>
        <div className='actions__search--card'>
          <Search />

          <MyAuctionContent data={data} />
        </div>
        <Filter />
        </div>
      </>
      )
}

      export default MyAuctionsPage
