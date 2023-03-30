import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React from 'react';

import AuctionsPage from "../Components/pages/pageAuctions/AuctionsPage.jsx";
import CabinetPage from "../Components/pages/pageCabinet/CabinetPage.jsx";
import MainPage from "../Components/pages/pageMain/MainPage.jsx";
import MyAuctionsPage from "../Components/pages/pageMyAuctions/MyAuctionsPage.jsx";
import NewsPage from "../Components/pages/pageNews/NewsPage.jsx";
import NotificationsPage from "../Components/pages/pageNotifications/NotificationsPage.jsx";
import PartnerPage from "../Components/pages/pagePartnerProgram/PartnerPage.jsx";
import QuestionsPage from "../Components/pages/pageQuestions/QuestionsPage.jsx";
import SupportPage from "../Components/pages/pageSupport/SupportPage.jsx";
import TokensPage from "../Components/pages/pageTokens/TokensPage.jsx";
import WinnersListPage from "../Components/pages/pageWinnersList/WinnersListPage.jsx";
import MainSection from '../Components/MainSection/MainSection.jsx';


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
