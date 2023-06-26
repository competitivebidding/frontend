import React from 'react'
import AppHeader from '../../components/appHeader/AppHeader.jsx'
import Filter from '../pageAuctions/filter/Filter.jsx'
import Search from '../pageAuctions/search/Search.jsx'
import MyAuctionContent from './MyAuctionContent/MyAuctionContent.jsx'
import useNoAuth from '../../hooks/useNoAuth.jsx';

const data = [
  {
    img: '/src/pages/pageAuctions/img/quare.png',
    alt: 'img',
    name: 'Apple Watch SE 44mm',
    date: '2023-04-06T15:12',
    price: '50',
    places: 12,
    status: 'active',
    id: 1,
  },
  {
    img: '/src/pages/pageAuctions/img/quare.png',
    alt: 'img',
    name: 'iPhone 12 Pro 128 Gb',
    date: '2023-04-06T17:30',
    price: '86',
    places: 12,
    status: 'end',
    id: 2,
  },
  {
    img: '/src/pages/pageAuctions/img/quare.png',
    alt: 'img',
    name: '1 Bitcoin',
    date: '2023-04-06T17:30',
    price: '2458',
    places: 3,
    status: 'wait',
    id: 3,
  },
  {
    img: '/src/pages/pageAuctions/img/quare.png',
    alt: 'img',
    name: 'Vacuum Dyson',
    date: '2023-04-06T17:30',
    price: '98.3',
    places: 15,
    status: 'active',
    id: 4,
  },
  {
    img: '/src/pages/pageAuctions/img/quare.png',
    alt: 'img',
    name: 'Hair Dryer Dyson',
    date: '2023-04-06T17:30',
    price: '85.9',
    places: 30,
    status: 'active',
    id: 5,
  },
  {
    img: '/src/pages/pageAuctions/img/quare.png',
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
