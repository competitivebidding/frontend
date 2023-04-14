import React from 'react'

import AppNavBar from '../appNavBar/AppNavBar.jsx'
import { Outlet } from 'react-router-dom'

function NavHeader() {
  return (
    <>
      <AppNavBar />
      <div className="main-section">
        <Outlet />
      </div>
    </>
  )
}

export default NavHeader
