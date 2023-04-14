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
      status: 'none',
      id: 1,
    },
    {
      img: '/src/pages/pageAuctions/img/quare.png',
      alt: 'img',
      name: 'iPhone 12 Pro 128 Gb',
      date: '2023-04-20T23:00',
      price: '86',
      places: 12,
      status: 'none',
      id: 2,
    },
    {
      img: '/src/pages/pageAuctions/img/quare.png',
      alt: 'img',
      name: '1 Bitcoin',
      date: '2023-04-15T23:00',
      price: '2458',
      places: 3,
      status: 'none',
      id: 3,
    },
    {
      img: '/src/pages/pageAuctions/img/quare.png',
      alt: 'img',
      name: 'Vacuum Dyson',
      date: '2023-04-30T23:00',
      price: '98.3',
      places: 15,
      status: 'none',
      id: 4,
    },
    {
      img: '/src/pages/pageAuctions/img/quare.png',
      alt: 'img',
      name: 'Hair Dryer Dyson',
      date: '2023-04-26T23:00',
      price: '85.9',
      places: 30,
      status: 'none',
      id: 5,
    },
    {
      img: '/src/pages/pageAuctions/img/quare.png',
      alt: 'img',
      name: 'MacBook Pro M1 256 Gb',
      date: '2023-04-15T23:00',
      price: '183.9',
      places: 0,
      status: 'none',
      id: 6,
    },
  ])

  // const changeStatus = (id, change) => {
  //   changeCard(
  //     data.map((card) => {
  //       if (card.id == id) {
  //         return { ...card, status: change }
  //       }
  //       return card
  //     }),
  //   )
  // }

  return (
    <>
      <AppHeader title={title} />
      {/* <div className='search__filter'> */}

      <Search />
      <div className="filter__cards">
        {/* </div> */}
        <div>
          <div className="title">Upcoming announcements </div>
          <CardsAuctions data={data} />
        </div>
        <Filter />
      </div>
    </>
  )
}

export default MyAuctionsPage
