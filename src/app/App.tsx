import {Route, Routes} from 'react-router-dom'

import React, {Suspense} from 'react'

import AuctionsPage from '../pages/auctions/AuctionsPage'
import CabinetPage from '../pages/cabinet/CabinetPage'
import MainPage from '../pages/main/MainPage'
import MyAuctionsPage from '../pages/my-auctions/MyAuctionsPage'
import NewsPage from '../pages/page-news/NewsPage'
import Messages from '../pages/messages/MessagesPage'
import NotificationsPage from '../pages/notifications/NotificationsPage'
import PartnerPage from '../pages/partner-program/PartnerPage'
import QuestionsPage from '../pages/questions/QuestionsPage'
import SupportPage from '../pages/support/SupportPage'
import TokensPage from '../pages/tokens/TokensPage'
import WinnersListPage from '../pages/winner-list/WinnersListPage'
import LotPage from '../pages/lot/LotPage'

import {MainSection} from '../widgets/main/ui/main-section/MainSection'
import NavHeader from '../widgets/nav-header-section/NavHeader'

import SignIn from '../pages/sign-in/SignIn'
import SignUp from '../pages/sign-up/SignUp'
import ResetPassword from '../pages/reset-password/ResetPassword'
import NewPassword from '../pages/new-password/NewPassword'

import './ui/App.scss'
import {useTranslation} from "react-i18next";

const App = () => {
  const { t} = useTranslation('header')
  return (
      <Suspense fallback={'loading...'}>
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
      </Suspense>
  )
}

export default App
