import React from 'react'
import WinnersListPage from '../WinnersListPage'
import '../WinnerListPage.scss'

const WinnerListCard = ({ acc, cardData, cardTime, winnerImg, prizeImg, prizeTitle, text }) => {
  return (
    <div className="winnerlist_card">
      <div className="card-header">
        <div className="card-header__card-info">
          <img
            className="card-header__card-info__card-image"
            src="src/pages/pageWinnersList/img/green.png"
            alt="greencircle"
          />
          <h1 className="card-header__card-info__card-acc">{acc}</h1>
        </div>
        <ul className="card-header__card-date">
          <li className="card-header__card-date__card-data">{cardData}</li>
          <li className="card-header__card-date__card-time">{cardTime}</li>
        </ul>
      </div>

      <div className="card-information">
        <img className="card-information__card-winner" src={winnerImg} alt="winner" />
        <div className="card-information__card-texts">
          <div className="card-information__card-texts__card-subtitle">
            <img src={prizeImg} alt="prize" />
            <h2>{prizeTitle}</h2>
          </div>
          <p className="card-information__card-texts__card-text">{text}</p>
        </div>
      </div>
    </div>
  )
}
export default WinnerListCard
