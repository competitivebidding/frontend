import React from 'react';
import AppHeader from '../../components/appHeader/AppHeader.jsx';

import Category from '../pageAuctions/Category.jsx';
import Filter from '../pageAuctions/Filter.jsx';
import Search from '../pageAuctions/Search.jsx';
import CardAuctions from '../pageAuctions/CardAuctions.jsx';

import './AuctionsPage.scss'

const MyAuctionsPage = ({ title }) => {
  return (
    <>
      <AppHeader title={title} />
      <div className='search__filter'>
      <Search />
      <Filter />
      </div>
      <Category />
      <CardAuctions />

    </>
  );
}

export default MyAuctionsPage;