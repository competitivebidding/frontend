import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
    <BrowserRouter>

      <div className='app'>

        <Routes>

          <Route element={<MainSection/>}> 
          <Route path='/auctions' element={<AuctionsPage/>} />
          <Route path='/cabinet' element={<CabinetPage/>} />
          <Route path='/' element={<MainPage/>} index />
          <Route path='/myauctions' element={<MyAuctionsPage/>} />
          <Route path='/news' element={<NewsPage/>} />
          <Route path='/notifications' element={<NotificationsPage/>} />
          <Route path='/partnerProgram' element={<PartnerPage/>} />
          <Route path='/questions' element={<QuestionsPage/>} />
          <Route path='/support' element={<SupportPage/>} />
          <Route path='/tokens' element={<TokensPage/>} />
          <Route path='/winnerList' element={<WinnersListPage/>} />
          </Route>

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
