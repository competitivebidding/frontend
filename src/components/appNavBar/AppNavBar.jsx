import React from 'react'

import { Link } from 'react-router-dom'

import logo from '../../assets/imgNavBar/LogoCircle.svg'
import hammerIco from '../../assets/imgNavBar/judge.svg'
import templates from '../../assets/imgNavBar/templates.svg'
import token from '../../assets/imgNavBar/token.svg'
import star from '../../assets/imgNavBar/star.svg'
import cup from '../../assets/imgNavBar/cup.svg'
import emoji from '../../assets/imgNavBar/emoji.svg'
import calendar from '../../assets/imgNavBar/calendar.svg'
import bell from '../../assets/imgNavBar/bell.svg'
import flash from '../../assets/imgNavBar/flash.svg'
import heart from '../../assets/imgNavBar/heart.svg'

import './AppNavBar.scss'

const AppNavBar = () => {
  return (
    <nav className="navBar">
      <div className="navBar__logo">
        <img src={logo} alt="Competitive bidding" />
        <h1 className="navBar__title">
          <Link to="/"> Competitive bidding </Link>
        </h1>
      </div>
      <div className="navBar__menu menu">
        <div className="menu__group">
          <div className="menu__item">
            <img src={templates} alt="templates" />
            <h3>
              <Link to="/cabinet"> Profile </Link>
            </h3>
          </div>
          <div className="menu__item">
            <img src={hammerIco} alt="hammerIco" />
            <h3>
              <Link to="/auctions">Auctions</Link>
            </h3>
          </div>
          <div href="" className="menu__item">
            <img src={token} alt="token" />
            <h3>
              <Link to="/tokens">Tokens</Link>
            </h3>
          </div>
        </div>

        <div className="menu__group">
          <div className="menu__item">
            <img src={star} alt="star" />
            <h3>
              <Link to="/myauctions">My auctions</Link>
            </h3>
          </div>
          <div href="" className="menu__item">
            <img src={cup} alt="cup" />
            <h3>
              <Link to="/winnerList"> Winners </Link>
            </h3>
          </div>
          <div href="" className="menu__item">
            <img src={emoji} alt="emoji" />
            <h3>
              <Link to="/partnerProgram"> Partner program </Link>
            </h3>
          </div>
        </div>
        <div className="menu__group">
          <div className="menu__item">
            <img src={calendar} alt="news" />
            <h3>
              <Link to="/news">News</Link>
            </h3>
          </div>
          <div className="menu__item">
            <img src={bell} alt="bell" />
            <h3>
              <Link to="/notifications">Notifications</Link>
            </h3>
          </div>
        </div>
        <div className="menu__group">
          <div className="menu__item">
            <img src={flash} alt="flash" />
            <h3>
              <Link to="/questions"> Frequent questions </Link>
            </h3>
          </div>
          <div className="menu__item">
            <img src={heart} alt="heart" />
            <h3>
              <Link to="support">TechSupport</Link>
            </h3>
          </div>
        </div>
      </div>
      <button className="navBar__button">Partner Link</button>
    </nav>
  )
}

export default AppNavBar
