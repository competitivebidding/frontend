import React, { useState } from 'react'
import AppHeader from '../../components/appHeader/AppHeader.jsx'

import CardsAuctions from './auctionCards/CardAuctions.jsx'
import Filter from './filter/Filter.jsx'
import Search from './search/Search.jsx'

import './AuctionsPage.scss'

const MyAuctionsPage = ({ title }) => {
  // эмитация данных с бэка
  const [data, changeCard] = useState([
    {
      img: '/src/pages/pageAuctions/img/quare.png',
      alt: 'img',
      name: 'Apple Watch SE 44mm',
      date: '2023-04-11T23:00',
      price: '50',
      places: 12,
      status: 'active',
      id: 1,
    },
    {
      img: '/src/pages/pageAuctions/img/quare.png',
      alt: 'img',
      name: 'iPhone 12 Pro 128 Gb',
      date: '2023-04-20T23:00',
      price: '86',
      places: 12,
      status: 'wait',
      id: 2,
    },
    {
      img: '/src/pages/pageAuctions/img/quare.png',
      alt: 'img',
      name: '1 Bitcoin',
      date: '2023-04-15T23:00',
      price: '2458',
      places: 3,
      status: 'wait',
      id: 3,
    },
    {
      img: '/src/pages/pageAuctions/img/quare.png',
      alt: 'img',
      name: 'Vacuum Dyson',
      date: '2023-04-30T23:00',
      price: '98.3',
      places: 15,
      status: 'active',
      id: 4,
    },
    {
      img: '/src/pages/pageAuctions/img/quare.png',
      alt: 'img',
      name: 'Hair Dryer Dyson',
      date: '2023-04-26T23:00',
      price: '85.9',
      places: 30,
      status: 'wait',
      id: 5,
    },
    {
      img: '/src/pages/pageAuctions/img/quare.png',
      alt: 'img',
      name: 'MacBook Pro M1 256 Gb',
      date: '2023-04-15T23:00',
      price: '183.9',
      places: 0,
      status: 'wait',
      id: 6,
    },
    {
      img: '/src/pages/pageAuctions/img/quare.png',
      alt: 'img',
      name: 'MacBook Pro M1 256 Gb',
      date: '2023-04-15T23:00',
      price: '183.9',
      places: 0,
      status: 'wait',
      id: 7,
    },
    {
      img: '/src/pages/pageAuctions/img/quare.png',
      alt: 'img',
      name: 'MacBook Pro M1 256 Gb',
      date: '2023-04-15T23:00',
      price: '183.9',
      places: 0,
      status: 'wait',
      id: 8,
    },
    {
      img: '/src/pages/pageAuctions/img/quare.png',
      alt: 'img',
      name: 'MacBook Pro M1 256 Gb',
      date: '2023-04-15T23:00',
      price: '183.9',
      places: 0,
      status: 'wait',
      id: 9,
    },
    {
      img: '/src/pages/pageAuctions/img/quare.png',
      alt: 'img',
      name: 'MacBook Pro M1 256 Gb',
      date: '2023-04-15T23:00',
      price: '183.9',
      places: 0,
      status: 'wait',
      id: 10,
    },
    {
      img: '/src/pages/pageAuctions/img/quare.png',
      alt: 'img',
      name: 'MacBook Pro M1 256 Gb',
      date: '2023-04-15T23:00',
      price: '183.9',
      places: 0,
      status: 'wait',
      id: 11,
    },
    {
      img: '/src/pages/pageAuctions/img/quare.png',
      alt: 'img',
      name: 'MacBook Pro M1 256 Gb',
      date: '2023-04-15T23:00',
      price: '183.9',
      places: 0,
      status: 'active',
      id: 11,
    },
  ])

  return (
    <>
      <AppHeader title={title} />

      <div className='auctions__components'>
        <div className='auctions__search--card'>
          <Search />

          <CardsAuctions data={data} />
        </div>
        <Filter />
      </div>
    </>
  )
}

export default MyAuctionsPage
