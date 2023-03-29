import React from 'react';

import AppNavBar from '../../appNavBar/AppNavBar.jsx';
import MainSection from "../../MainSection/MainSection.jsx";
import Test from './Test.jsx';

const AuctionsPage = () => {
  return (
    <>
    <AppNavBar/>
    <MainSection pageSection={ <Test/> } />
    </>
  );
}

export default AuctionsPage;
