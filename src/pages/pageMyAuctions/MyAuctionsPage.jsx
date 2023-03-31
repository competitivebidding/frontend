import React from 'react';
import AppHeader from '../../components/appHeader/AppHeader.jsx';

import Category from './Category.jsx';
import Filter from './Filter.jsx';
import Search  from './Search.jsx';
import CardAuctions from './CardAuctions.jsx';

const MyAuctionsPage = ({title}) => {
  return (
      <>
        <AppHeader title={title}/>
        <Search/>
        <Category/>
        <CardAuctions/>
        <Filter />
      </>
  );
}

export default MyAuctionsPage;
