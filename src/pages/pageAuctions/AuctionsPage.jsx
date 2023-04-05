import React from 'react';
import AppHeader from '../../components/appHeader/AppHeader.jsx';

import Category from '../pageAuctions/Category.jsx';
import Filter from '../pageAuctions/Filter.jsx';
import Search from '../pageAuctions/Search.jsx';
import CardsAuctions from '../pageAuctions/CardAuctions.jsx';

import './AuctionsPage.scss'

const MyAuctionsPage = ({ title }) => {

  // эмитация данных с бэка
  const data = [
    { img: '/src/pages/pageAuctions/img/quare.png', alt: 'img', name: 'Apple Watch SE 44mm', date: '22/02/2023    12:30', price: '11111', id: 1 },
    { img: '/src/pages/pageAuctions/img/quare.png', alt: 'img', name: 'Apple Watch SE 44mm', date: '22/02/2023    12:30', price: '11111', id: 2 },
    { img: '/src/pages/pageAuctions/img/quare.png', alt: 'img', name: 'Apple Watch SE 44mm', date: '22/02/2023    12:30', price: '11111', id: 3 },
    { img: '/src/pages/pageAuctions/img/quare.png', alt: 'img', name: 'Apple Watch SE 44mm', date: '22/02/2023    12:30', price: '11111', id: 4 },
    { img: '/src/pages/pageAuctions/img/quare.png', alt: 'img', name: 'Apple Watch SE 44mm', date: '22/02/2023    12:30', price: '11111', id: 5 },
    { img: '/src/pages/pageAuctions/img/quare.png', alt: 'img', name: 'Apple Watch SE 44mm', date: '22/02/2023    12:30', price: '11111', id: 6 },
  ];
  return (
    <>
      <AppHeader title={title} />
      <div className='search__filter'>
        <Search />
        <Filter />
      </div>
      <Category />
      <CardsAuctions data={data} />
    </>
  );
}

export default MyAuctionsPage;