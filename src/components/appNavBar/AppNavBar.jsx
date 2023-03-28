import React from 'react';

import logo from '../../assets/imgNavBar/LogoCircle.svg';
import hammerIco from '../../assets/imgNavBar/judge.svg';
import templates from '../../assets/imgNavBar/templates.svg';
import token from '../../assets/imgNavBar/token.svg';
import star from '../../assets/imgNavBar/star.svg';
import cup from '../../assets/imgNavBar/cup.svg';
import emoji from '../../assets/imgNavBar/emoji.svg';
import calendar from '../../assets/imgNavBar/calendar.svg';
import bell from '../../assets/imgNavBar/bell.svg';
import flash from '../../assets/imgNavBar/flash.svg';
import heart from '../../assets/imgNavBar/heart.svg';

import './AppNavBar.scss';


const AppNavBar = () => {
  return (

    <nav className="navBar">
  <div className="navBar__logo">
    <img
      src={logo}
      alt=""
    />
    <h1 className="navBar__title">
      Competitive bidding
    </h1>
  </div>
  <div className="navBar__menu menu">
    <div className="menu__group">
      <a href='' className="menu__item">
        <img
          src={templates}
          alt="templates"
        />
        <h3>Profile</h3>
      </a>
      <a href='' className="menu__item">
        <img
          src={hammerIco}
          alt="hammerIco"
        />
        <h3>Auctions</h3>
      </a>
      <a href='' className="menu__item">
        <img
          src={token}
          alt="token"
        />
        <h3>Tokens</h3>
      </a>
    </div>

    <div className="menu__group">
      <a href='' className="menu__item">
        <img
          src={star}
          alt="star"
        />
        <h3>My auctions</h3>
      </a>
      <a href='' className="menu__item">
        <img
          src={cup}
          alt="cup"
        />
        <h3>Winners</h3>
      </a>
      <a href='' className="menu__item">
        <img
          src={emoji}
          alt="emoji"
        />
        <h3>Partner program</h3>
      </a>
    </div>
    <div className="menu__group">
      <a href='' className="menu__item">
        <img
          src={calendar}
          alt="calendar"
        />
        <h3>News</h3>
      </a>
      <a href='' className="menu__item">
        <img
          src={bell}
          alt="bell"
        />
        <h3>Notifications</h3>
      </a>
    </div>
    <div className="menu__group">
      <a href='' className="menu__item">
        <img
          src={flash}
          alt="flash"
        />
        <h3>Frequent questions</h3>
      </a>
      <a href='' className="menu__item">
        <img
          src={heart}
          alt="heart"
        />
        <h3>TechSupport</h3>
      </a>
    </div>

  </div>
  <button className='navBar__button'>
    Partner Link
  </button>

</nav>
  );
};

export default AppNavBar;
