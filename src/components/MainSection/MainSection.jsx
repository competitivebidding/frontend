import React from 'react';
import AppHeader from "../appHeader/AppHeader.jsx";
import AppFooter from "../appFooter/AppFooter.jsx";
import AppNavBar from '../appNavBar/AppNavBar.jsx';
import { Outlet } from 'react-router-dom';

import './MainSection.scss'

function MainSection() {
  return (
    <>
      <AppNavBar />
      <div className='main-section'>
        <AppHeader />

        <Outlet />
        <AppFooter />

      </div>
    </>
  );
}

export default MainSection;
