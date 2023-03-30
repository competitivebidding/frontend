import { Route, Routes } from 'react-router-dom';

import React from 'react';

import AuctionsPage from "../pages/pageAuctions/AuctionsPage.jsx";
import CabinetPage from "../pages/pageCabinet/CabinetPage.jsx";
import MainPage from "../pages/pageMain/MainPage.jsx";
import MyAuctionsPage from "../pages/pageMyAuctions/MyAuctionsPage.jsx";
import NewsPage from "../pages/pageNews/NewsPage.jsx";
import NotificationsPage from "../pages/pageNotifications/NotificationsPage.jsx";
import PartnerPage from "../pages/pagePartnerProgram/PartnerPage.jsx";
import QuestionsPage from "../pages/pageQuestions/QuestionsPage.jsx";
import SupportPage from "../pages/pageSupport/SupportPage.jsx";
import TokensPage from "../pages/pageTokens/TokensPage.jsx";
import WinnersListPage from "../pages/pageWinnersList/WinnersListPage.jsx";

import MainSection from '../components/MainSection/MainSection.jsx';


import './App.scss'


const App = () => {

  return (
      <div className='app'>
        <Routes>
          <Route path='/auctions' element={<AuctionsPage title={'Auction'}/>} />
          <Route path='/cabinet' element={<CabinetPage title={'PartnerProgram'}/>} />
          <Route path='/' element={<MainPage title={'PartnerProgram'}/>} index />
          <Route path='/myauctions' element={<MyAuctionsPage title={'PartnerProgram'}/>} />
          <Route path='/news' element={<NewsPage title={'PartnerProgram'}/>} />
          <Route path='/notifications' element={<NotificationsPage title={'PartnerProgram'}/>} />
          <Route path='/partnerProgram' element={<PartnerPage title={'PartnerProgram'}/>} />
          <Route path='/questions' element={<QuestionsPage title={'PartnerProgram'}/>} />
          <Route path='/support' element={<SupportPage title={'PartnerProgram'}/>} />
          <Route path='/tokens' element={<TokensPage title={'PartnerProgram'}/>} />
          <Route path='/winnerList' element={<WinnersListPage title={'PartnerProgram'}/>} />
        </Routes>
      </div>
  );
}

export default App;
