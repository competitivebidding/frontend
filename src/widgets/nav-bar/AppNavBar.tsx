import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import logo from '@assets/imgNavBar/LogoCircle.svg'
import hammerIco from '@assets/imgNavBar/judge.svg'
import templates from '@assets/imgNavBar/templates.svg'
import token from '@assets/imgNavBar/token.svg'
import star from '@assets/imgNavBar/star.svg'
import cup from '@assets/imgNavBar/cup.svg'
import emoji from '@assets/imgNavBar/emoji.svg'
import calendar from '@assets/imgNavBar/calendar.svg'
import bell from '@assets/imgNavBar/bell.svg'
import flash from '@assets/imgNavBar/flash.svg'
import heart from '@assets/imgNavBar/heart.svg'
import messages from '@assets/imgNavBar/messages.svg'

import cls from './AppNavBar.module.scss'

export const AppNavBar = () => {
  const { t } = useTranslation('appNavBar')

  return (
      <nav className={cls.navBar}>
        <Link to="/" className={cls.navBar__logo}>
          <img src={logo} alt="Competitive bidding" />
          <h1 className={cls['navBar__title']}>
            <div> {t('Competitive')}<br/> {t('bidding')} </div>
          </h1>
          </Link>

        <div className={cls['navBar__menu']}>
          <div className={cls['menu__group']}>
            <NavLink to="/cabinet" className={({ isActive }) => (isActive ? cls['navBar__name'] : cls['navBar__menu__group a'])}>
              <div className={cls['menu__item']}>
                <img src={templates} alt="templates" />
                <h3>{t('Profile')}</h3>
              </div>
            </NavLink>

            <NavLink to="/auctions" className={({ isActive }) => (isActive ? cls['navBar__name'] : cls['navBar__menu__group a'])}>
              <div className={cls['menu__item']}>
                <img src={hammerIco} alt="hammerIco" />
                <h3>{t('Auctions')}</h3>
              </div>
            </NavLink>

            <NavLink to="/tokens" className={({ isActive }) => (isActive ? cls['navBar__name'] : cls['navBar__menu__group a'])}>
              <div className={cls['menu__item']}>
                <img src={token} alt="token" />
                <h3>{t('Tokens')}</h3>
              </div>
            </NavLink>
          </div>

          <div className={cls['menu__group']}>
            <NavLink to="/myauctions" className={({ isActive }) => (isActive ? cls['navBar__name'] : cls['navBar__menu__group a'])}>
              <div className={cls['menu__item']}>
                <img src={star} alt="star" />
                <h3>{t('My auctions')}</h3>
              </div>
            </NavLink>

            <NavLink to="/winnerList" className={({ isActive }) => (isActive ? cls['navBar__name'] : cls['navBar__menu__group a'])}>
              <div className={cls['menu__item']}>
                <img src={cup} alt="cup" />
                <h3>{t('Winners')}</h3>
              </div>
            </NavLink>

            <NavLink to="/partnerProgram" className={({ isActive }) => (isActive ? cls['navBar__name'] : cls['navBar__menu__group a'])}>
              <div className={cls['menu__item']}>
                <img src={emoji} alt="emoji" />
                <h3>{t('Partner program')}</h3>
              </div>
            </NavLink>
          </div>

          <div className={cls['menu__group']}>
            <NavLink to="/messages" className={({ isActive }) => (isActive ? cls['navBar__name'] : cls['navBar__menu__group a'])}>
              <div className={cls['menu__item']}>
                <img src={messages} alt="messages" />
                <h3>{t('Messages')}</h3>
              </div>
            </NavLink>

            <NavLink to="/news" className={({ isActive }) => (isActive ? cls['navBar__name'] : cls['navBar__menu__group a'])}>
              <div className={cls['menu__item']}>
                <img src={calendar} alt="news" />
                <h3>{t('News')}</h3>
              </div>
            </NavLink>

            <NavLink to="/notifications" className={({ isActive }) => (isActive ? cls['navBar__name'] : cls['navBar__menu__group a'])}>
              <div className={cls['menu__item']}>
                <img src={bell} alt="bell" />
                <h3>{t('Notifications')}</h3>
              </div>
            </NavLink>
          </div>

          <div className={cls['menu__group']}>
            <NavLink to="/questions" className={({ isActive }) => (isActive ? cls['navBar__name'] : cls['navBar__menu__group a'])}>
              <div className={cls['menu__item']}>
                <img src={flash} alt="flash" />
                <h3>{t('Frequent questions')}</h3>
              </div>
            </NavLink>

            <NavLink to="/support" className={({ isActive }) => (isActive ? cls['navBar__name'] : cls['navBar__menu__group a'])}>
              <div className={cls['menu__item']}>
                <img src={heart} alt="heart" />
                <h3>{t('TechSupport')}</h3>
              </div>
            </NavLink>
          </div>
        </div>
      </nav>
  )
}
