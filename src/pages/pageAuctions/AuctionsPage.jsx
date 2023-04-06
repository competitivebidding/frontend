import React from 'react';
import AppHeader from '../../components/appHeader/AppHeader.jsx';


import Filter from '../pageAuctions/Filter.jsx';
import Search from '../pageAuctions/Search.jsx';
import CardsAuctions from '../pageAuctions/CardAuctions.jsx';

import './AuctionsPage.scss'

const MyAuctionsPage = ({ title }) => {

  // эмитация данных с бэка
  const data = [
    { img: '/src/pages/pageAuctions/img/quare.png', alt: 'img', name: 'Apple Watch SE 44mm', date: '2023-06-22', price: '11111', places: 0, id: 1 },
    { img: '/src/pages/pageAuctions/img/quare.png', alt: 'img', name: 'Apple Watch SE 44mm', date: '2023-06-22T12:30:00.000Z', price: '11111', places: 1, id: 2 },
    { img: '/src/pages/pageAuctions/img/quare.png', alt: 'img', name: 'Apple Watch SE 44mm', date: '2023-06-22T12:30:00.000Z', price: '11111', places: 3, id: 3 },
    { img: '/src/pages/pageAuctions/img/quare.png', alt: 'img', name: 'Apple Watch SE 44mm', date: '2023-06-22T12:30:00.000Z', price: '11111', places: 2, id: 4 },
    { img: '/src/pages/pageAuctions/img/quare.png', alt: 'img', name: 'Apple Watch SE 44mm', date: '2023-06-22T12:30:00.000Z', price: '11111', places: 0, id: 5 },
    { img: '/src/pages/pageAuctions/img/quare.png', alt: 'img', name: 'Apple Watch SE 44mm', date: '2023-06-22T12:30:00.000Z', price: '11111', places: 1, id: 6 },
  ];
  return (
    <>
      <AppHeader title={title} />
      {/* <div className='search__filter'> */}

      <Search />
      <div className='filter__cards'>

        {/* </div> */}
        <CardsAuctions data={data} />
        <Filter />
      </div>
    </>
  );
}

export default MyAuctionsPage;