import React, { useState } from 'react';

import userImg from '@assets/imgPartnerProgram/user.svg';
import phone from '@assets/imgPartnerProgram/phone.svg';

import './UserInfoAccount.scss';

const UserInfoAccount = () => {
  const [userInfo, setUserInfo] = useState({
    mainCard: {
      picture: userImg,
      verify: false,
      id: '78950430',
    },
    phoneCard: {
      phoneNumber: '+181435113212',
      verify: true,
      condition: false,
    },
    emailCard: {
      emailNumber: '',
      verify: false,
    },
    cardCard: {
      verify: false,
    },
  });

  return (
    <article className="block__template">
      <div className="block__item item-info">
        <div className="item-info__user">
          <img
            src={userInfo.mainCard.picture}
            alt=""
            className="item-info__img"
          />
          <div
            className={`item-info__verify ${
              userInfo.mainCard.verify ? 'green-mode' : ''
            }`}
          >
            {userInfo.mainCard.verify ? 'Confirmed' : 'Unconfirmed'}
          </div>
          <div className="item-info__id">id: {userInfo.mainCard.id}</div>
        </div>
        <div className="item-info__button">
          <button>Settings</button>
        </div>
      </div>
      <div className="block__item item-partner">partner</div>
      <div className="block__item item-phone">
        <div className="item-phone__main main-phone">
          <div className="main-phone__img">
            <img
              src={phone}
              alt=""
            />
          </div>
          <div className="main-phone__info">
            <div className="main-phone__phone-info">
              <div className="main-phone__name">Phone</div>
              <div className="main-phone__phone">
                {userInfo.phoneCard.phoneNumber}
              </div>
            </div>
            <div
              className={`main-phone__status ${
                userInfo.phoneCard.verify ? 'green-mode' : ''
              }`}
            >
              {userInfo.phoneCard.verify ? 'Confirmed' : 'Uncomfirmed'}
            </div>
          </div>
        </div>
        <div className="item-phone__button">
          <button>Submit</button>
        </div>
      </div>
      <div className="block__item item-email">email</div>
      <div className="block__item item-card">card</div>
    </article>
  );
};

export default UserInfoAccount;
