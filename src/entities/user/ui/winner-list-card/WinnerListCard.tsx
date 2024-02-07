import React from 'react';
import cls from './WinnerListCard.module.scss';
import green from '@assets/winner-list/green.png';

const WinnerListCard = ({ acc, cardData, cardTime, winnerImg, prizeImg, prizeTitle, text }: { acc: any, cardData: any, cardTime: any, winnerImg: any, prizeImg: any, prizeTitle: any, text: any }) => {
  return (
      <div className={cls.winnerlist_card}>
        <div className={cls['card-header']}>
          <div className={cls['card-header__card-info']}>
            <img className={cls['card-header__card-info__card-image']} src={green} alt="greencircle" />
            <h1 className={cls['card-header__card-info__card-acc']}>{acc}</h1>
          </div>
          <ul className={cls['card-header__card-date']}>
            <li className={cls['card-header__card-date__card-data']}>{cardData}</li>
            <li className={cls['card-header__card-date__card-time']}>{cardTime}</li>
          </ul>
        </div>

        <div className={cls['card-information']}>
          <img className={cls['card-information__card-winner']} src={winnerImg} alt="winner" />
          <div className={cls['card-information__card-texts']}>
            <div className={cls['card-information__card-texts__card-subtitle']}>
              <img src={prizeImg} alt="prize" />
              <h2>{prizeTitle}</h2>
            </div>
            <p className={cls['card-information__card-texts__card-text']}>{text}</p>
          </div>
        </div>
      </div>
  );
}

export default WinnerListCard

