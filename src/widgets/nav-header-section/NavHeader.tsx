import React from 'react'

import { Outlet } from 'react-router-dom'
import {AppNavBar} from "@widgets/nav-bar/AppNavBar";

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
