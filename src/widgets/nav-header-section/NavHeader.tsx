import React from 'react'

import { Outlet } from 'react-router-dom'
import { AppNavBar } from '@widgets/nav-bar/AppNavBar'
import AppHeader from '@widgets/header/AppHeader'

function NavHeader() {
  return (
    <>
      <AppNavBar />
      
      <div className="main-section">
      <AppHeader />
        <Outlet />
      </div>
    </>
  )
}

export default NavHeader
