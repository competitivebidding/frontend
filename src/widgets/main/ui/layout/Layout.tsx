import React, { useState } from 'react'
import AppFooter from '../../../footer/AppFooter.js'
import { AppNavBar } from '../../../nav-bar/AppNavBar'
import { Outlet } from 'react-router-dom'

import './Layout.scss'
import useWindowSize from '@shared/lib/useWindowSize'
import AppHeader from '@widgets/header/AppHeader'

export const Layout = () => {
  const userWidth = useWindowSize().width

  return (
    <>
      {userWidth! > 1000 && <AppNavBar />}
      <div className='main-section'>
        <AppHeader />
        <Outlet />
        <AppFooter />
      </div>
    </>
  )
}



