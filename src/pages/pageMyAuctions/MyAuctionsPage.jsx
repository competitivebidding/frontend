import React from 'react';
import AppHeader from '../../components/appHeader/AppHeader.jsx';
import Filter from '../pageAuctions/Filter.jsx';
import Search from '../pageAuctions/Search.jsx';

const MyAuctionsPage = ({ title }) => {
  return (
    <>
      <AppHeader title={title} />
      <div className='search__filter' style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Search />
        <Filter />
      </div>
    </>
  );
}

export default MyAuctionsPage;

