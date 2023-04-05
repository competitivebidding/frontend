import React from 'react';
import {Link} from 'react-router-dom'

import blueBalance from '../../assets/imgHeader/blueBalance.svg';
import iconExit from '../../assets/imgHeader/iconExit.svg';
import iconNotification from '../../assets/imgHeader/iconNotification.svg';
import imgHeader from '../../assets/imgHeader/imgHeader.svg';

import './AppHeader.scss';

const AppHeader = ({title}) => {
  return (
    <header className='header'>
      <h1 className='header__title'>{title}</h1>
      <div className='header__group group'>
        <div className='group__log'>
          <Link to='LogIn'>Log in</Link> 
          </div>
        <div className='group__sign'>Sign in</div>
        {/* <img className='group__balance' src={blueBalance} alt="blueBalance" />
        <div className='group__balanceSum'>20</div>
        <img className='group__notifications' src={iconNotification} alt="iconNotification" />
        <p className='group__name'>NickName</p>
        <img className='group__profile' src={imgHeader} alt="imgHeader" />
        <img className='group__exit' src={iconExit} alt="iconExit" /> */}
      </div>
    </header>
  );
}

export default AppHeader;
