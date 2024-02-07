import React, {lazy, useState} from 'react'
import AppFooter from '../../../footer/AppFooter.js'
import { AppNavBar } from '../../../nav-bar/AppNavBar'
import { Outlet } from 'react-router-dom'

import cls from './Layout.module.scss'
import useWindowSize from '@shared/lib/useWindowSize'

const AppHeader = lazy(() => import('@widgets/header/AppHeader'))

export const Layout = () => {
  const userWidth = useWindowSize().width

  return (
    <>
      {userWidth! > 1000 && <AppNavBar />}
      <div className={cls["main-section"]}>
        <AppHeader />
        <Outlet />
        <AppFooter />
      </div>
    </>
  )
}
