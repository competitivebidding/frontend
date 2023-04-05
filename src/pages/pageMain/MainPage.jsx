import React from 'react';

import './MainPage.scss';
// import AppNavBar from '../../appNavBar/AppNavBar.jsx';
// import MainSection from "../../MainSection/MainSection.jsx";
import User from './user/User.jsx';
import AppNavBar from '../../components/appNavBar/AppNavBar.jsx';
import MainSection from '../../components/MainSection/MainSection.jsx';
import Stats from './stats/Stats.jsx';
import ListItem from './listItem/ListItem';

const AuctionsPage = () => {
  return (
    <div className="">
      <div className={'main'}>
        <div className={'main__royalAction'}>
          <div className={'royalAction__title'}>Royal Auction</div>
          <div className={'royalAction__text'}>
            This is an international online auction that offers the opportunity
            to bid for the right to purchase goods, services, crypto-assets,
            cars, real estate and other things, for 15-20% of their market value
          </div>
          <div className={'royalAction__crown'}>
            <img src={'src/assets/pageMain/royalAuction.png'} />
          </div>
        </div>
        <div className={'main__howItWorks'}>
          <div className={'howItWorks__title'}>How it works?</div>
          <div className={'howItWorks__subtitle'}>
            In the <u>auction</u> section, various offers in demand on the
            market are put up for auction: gadgets, electronics, jewelry,
            cryptocurrencies, cars, and more.
          </div>
          <div className={'howItWorks__progress'}>
            <ul className={'progress__list'}>
              <ListItem
                styles="active"
                text="Before the start of the auction for each of the proposals, an announcement appears
                            with the date and time of the start of the auction and a set of participants is opened"
                value="1"
              />
              <ListItem
                text="A limited number of people can participate in each offer, set individually for each offer."
                value="2"
              />
              <ListItem
                text="To participate in the auction, you must have on your balance the internal game currency
                        ROTO (Royal Token)"
                value="3"
              />
              <ListItem
                text="In order to reserve a place and confirm participation in the auction,
                        players need to freeze the set number of ROTO tokens before the start."
                value="4"
              />
              <ListItem
                text="At the end of the timer, bidding begins immediately and participants
                        begin to click on the “buy” button"
                value="5"
              />
              <ListItem
                text="Each click costs a predetermined amount of ROTO on each of the offers."
                value="6"
              />
              <ListItem
                text="After each click made, the right to purchase an offer passes to the
                        last clicked bidder"
                value="7"
              />
              <ListItem
                text="If no one has called you back within the set time since your click,
                        the offer goes to you!"
                value="8"
              />
            </ul>
          </div>
        </div>

        <div className={'main__mission'}>
          <div className={'mission__title'}>Mission</div>
          <div className={'mission__subtitle'}>
            100,000 lucky people who won the auction
            <span>100 000</span>
          </div>
          <div className={'mission__progressBar'}>
            <span></span>
          </div>
        </div>

        <div className="main__stats">
          <Stats
            property="big"
            title="Sum winnings"
            text="1 300 300 r."
          />
          <Stats
            title="Number of participants"
            text="1345"
          />
          <Stats
            title="Number of participating countries"
            text="7 "
          />
          <Stats
            title="Auctions daily"
            text="112"
          />
          <Stats
            // property="image"
            title="Number of winners"
            text="132"
            // image="src\assets\pageMain\trophy-front-premium.png"
          />
          <Stats
            title="Withdrawn to partners big"
            text="944 567 r."
          />
          <Stats
            title="Number of partners"
            text="234"
          />
        </div>
      </div>
      <div className="main-bottom">
        <div className="main-bottom__left">
          <div className="social">
            <div className="social__item">
              <div className="social__item_wrap">
                <img
                  src="src/assets/pageMain/inst.svg"
                  alt=""
                />
              </div>
              <a href="#">Instagram</a>
            </div>
            <div className="social__item">
              <div className="social__item_wrap">
                <img
                  src="src/assets/pageMain/tg.svg"
                  alt=""
                />
              </div>
              <a href="#">Телеграм</a>
            </div>
            <div className="social__item">
              <div className="social__item_wrap">
                <img
                  src="src/assets/pageMain/message.svg"
                  alt=""
                />
              </div>
              <a href="#">Телеграм-бот</a>
            </div>
          </div>
          <div className="chats">
            <div className="chat chat__1">
              <h3 className="chat__title">Чат игроков</h3>
              <img
                src="src/assets/pageMain/main_placeholder-1.png"
                alt=""
              />
            </div>
            <div className="chat chat__2">
              <h3 className="chat__title">Чат партнёров</h3>
              <img
                src="src/assets/pageMain/main_placeholder-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="main-bottom__right">
          <div className="last-users">
            <h2 className="last-users__title">Последние регистрации</h2>
            <div className="last-users__top">
              <p className="last-users__top_text">Страна</p>
              <p className="last-users__top_text">E-mail</p>
              <p className="last-users__top_text">Дата</p>
            </div>
            <User />
            <User />
            <User />
            <User />
            <User />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionsPage;
