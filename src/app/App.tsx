import { Route, Routes } from 'react-router-dom'

import React, { Suspense } from 'react'

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

import { Layout } from '@widgets/main'
import NavHeader from '../widgets/nav-header-section/NavHeader'

import SignIn from '../pages/sign-in/SignIn'
import SignUp from '../pages/sign-up/SignUp'
import ResetPassword from '../pages/reset-password/ResetPassword'
import NewPassword from '../pages/new-password/NewPassword'

import './ui/App.scss'
import { useTranslation } from 'react-i18next'
import AuthLayout from "@pages/authorization/AuthLayout";

const App = () => {
  const { t } = useTranslation('header')
  return (
    <Suspense fallback={'loading...'}>
      <div className="app">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} index />
            <Route path="/auctions" element={<AuctionsPage />} />
            <Route path="/myauctions" element={<MyAuctionsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/partnerProgram" element={<PartnerPage />} />
            <Route path="/tokens" element={<TokensPage />} />
            <Route path="/winnerList" element={<WinnersListPage />} />
            <Route path="/Lot/:id" element={<LotPage />} />
            <Route path="/cabinet" element={<CabinetPage />} />
          </Route>

          <Route element={<NavHeader />}>
            <Route path="/cabinet" element={<CabinetPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/questions" element={<QuestionsPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route index path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/NewPassword" element={<NewPassword />} />
          </Route>
        </Routes>
      </div>
    </Suspense>
  )
}

export default App
