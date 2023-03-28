import React from 'react';

import blueBalance from '../../assets/imgHeader/blueBalance.svg';
import iconExit from '../../assets/imgHeader/iconExit.svg';
import iconNotification from '../../assets/imgHeader/iconNotification.svg';
import imgHeader from '../../assets/imgHeader/imgHeader.svg';

import './AppHeader.scss';

const AppHeader = () => {
  return (
    <header className='header'>
      <div className='header__title'> Main </div>

      <div className='header__group'>
        <img src={blueBalance} alt="blueBalance" />
        <img src={iconNotification} alt="iconNotification" />
        <div className=''>Nickname</div>
        <img src={imgHeader} alt="imgHeader" />
        <img src={iconExit} alt="iconExit" />
      </div>
    </header>
  );
}

export default AppHeader;
