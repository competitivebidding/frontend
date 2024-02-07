import { Route, Routes } from 'react-router-dom'

import React, {lazy, Suspense} from 'react'

const AuctionsPage = lazy(()=> import('@/pages/auctions/AuctionsPage'))
const MainPage = lazy(()=> import('@/pages/main/MainPage'))
const CabinetPage = lazy(() => import('../pages/cabinet/CabinetPage'))
const MyAuctionsPage = lazy(() => import('../pages/my-auctions/MyAuctionsPage'))
const NewsPage = lazy(() => import('../pages/page-news/NewsPage'))
const Messages = lazy(() => import('../pages/messages/MessagesPage'))
const NotificationsPage = lazy(() => import('../pages/notifications/NotificationsPage'))
const PartnerPage = lazy(() => import('../pages/partner-program/PartnerPage'))
const QuestionsPage = lazy(() => import('../pages/questions/QuestionsPage'))
const SupportPage = lazy(() => import('../pages/support/SupportPage'))
const TokensPage = lazy(() => import('../pages/tokens/TokensPage'))
const WinnersListPage = lazy(() => import('../pages/winner-list/WinnersListPage'))
const LotPage = lazy(() => import('../pages/lot/LotPage'))
const SignIn = lazy(() => import('../pages/sign-in/SignIn'))
const SignUp = lazy(() => import('../pages/sign-up/SignUp'))
const ResetPassword = lazy(() => import('../pages/reset-password/ResetPassword'))
const NewPassword = lazy(() => import('../pages/new-password/NewPassword'))
const AuthLayout = lazy(() => import("@pages/authorization/AuthLayout"))

import { Layout } from '@widgets/main'
import iconLoader from "@assets/Chat/iconLoader.svg"
import './ui/App.scss'
import { useTranslation } from 'react-i18next'

const App = () => {
  const { t } = useTranslation('header')
  return (
    <Suspense fallback={
      <div className='spinner'>
        <img src={iconLoader} alt="Spinner" />
      </div>
    }>
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
