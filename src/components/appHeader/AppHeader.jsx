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

      <div className='header__group group'>
        <img className='group__balance' src={blueBalance} alt="blueBalance" />
        <img className='group__notifications' src={iconNotification} alt="iconNotification" />
        <div className='group__name'>Nickname</div>
        <img className='group__profile' src={imgHeader} alt="imgHeader" />
        <img className='group__exit' src={iconExit} alt="iconExit" />
      </div>
    </header>
  );
}

export default AppHeader;
