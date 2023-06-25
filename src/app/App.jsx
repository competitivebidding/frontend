import {Route, Routes} from 'react-router-dom'

import React, {Suspense} from 'react'

import AuctionsPage from '../pages/pageAuctions/AuctionsPage.jsx'
import CabinetPage from '../pages/pageCabinet/CabinetPage.jsx'
import MainPage from '../pages/pageMain/MainPage.jsx'
import MyAuctionsPage from '../pages/pageMyAuctions/MyAuctionsPage.jsx'
import NewsPage from '../pages/pageNews/NewsPage.jsx'
import Messages from '../pages/pageMessages/MessagesPage.jsx'
import NotificationsPage from '../pages/pageNotifications/NotificationsPage.jsx'
import PartnerPage from '../pages/pagePartnerProgram/PartnerPage.jsx'
import QuestionsPage from '../pages/pageQuestions/QuestionsPage.jsx'
import SupportPage from '../pages/pageSupport/SupportPage.jsx'
import TokensPage from '../pages/pageTokens/TokensPage.jsx'
import WinnersListPage from '../pages/pageWinnersList/WinnersListPage.jsx'
import LotPage from '../pages/pageAuctions/LotPage/LotPage.jsx'

import MainSection from '../components/MainSection/MainSection.jsx'
import NavHeader from '../components/NavHeaderSection/NavHeader.jsx'

import SignIn from '../pagesAuthorization/PageSignIn/SignIn.jsx'
import SignUp from '../pagesAuthorization/PageSignUp/SignUp.jsx'
import ResetPassword from '../pagesAuthorization/PageResetPassword/ResetPassword.jsx'
import NewPassword from '../pagesAuthorization/PageNewPassword/NewPassword.jsx'

import './App.scss'
import {UserContextProvider} from "../context/AuthContext";
import {useTranslation} from "react-i18next";

const App = () => {
  const {t} = useTranslation('header')
  return (
      <Suspense fallback={'loading...'}>
        <UserContextProvider>
          <div className="app">
            <Routes>
              <Route element={<MainSection />}>
                <Route path="/" element={<MainPage title={'Main'} />} index />
                <Route path="/auctions" element={<AuctionsPage title={'Auction'} />} />
                <Route path="/myauctions" element={<MyAuctionsPage title={'My Auctions'} />} />
                <Route path="/news" element={<NewsPage title={'News'} />} />
                <Route path="/messages" element={<Messages title={'Messages'} />} />
                <Route path="/partnerProgram" element={<PartnerPage title={'Partner Program'} />} />
                <Route path="/tokens" element={<TokensPage title={'Tokens'} />} />
                <Route path="/winnerList" element={<WinnersListPage title={'WinnerList'} />} />
                <Route path="/Lot/:id" element={<LotPage title={'Lot №1'} />} />
                <Route path="/cabinet" element={<CabinetPage title={t('cabinet')} />} />
              </Route>

              <Route element={<NavHeader />}>
                <Route path="/cabinet" element={<CabinetPage title={'Cabinet'} />} />
                <Route path="/notifications" element={<NotificationsPage title={'Notifications'} />} />
                <Route path="/questions" element={<QuestionsPage title={'Questions'} />} />
                <Route path="/support" element={<SupportPage title={'Support'} />} />
              </Route>

              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/ResetPassword" element={<ResetPassword />} />
              <Route path="/NewPassword" element={<NewPassword />} />
            </Routes>
          </div>
        </UserContextProvider>
      </Suspense>

  )
}

export default App
