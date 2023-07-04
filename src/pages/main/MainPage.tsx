import React from 'react';
import './MainPage.scss';
import AppHeader from '../../widgets/header/AppHeader.js';

import { MainTop } from '../../widgets/main/ui/main-top/MainTop';

import { MainBottom } from '../../widgets/main/ui/main-bottom/MainBottom';


const AuctionsPage = () => {
  return (
    <div>
      <MainTop />
      <MainBottom />
    </div>
  );
};

export default AuctionsPage;
