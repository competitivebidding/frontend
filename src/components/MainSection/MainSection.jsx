import React from 'react';
// import AppHeader from "../appHeader/AppHeader.jsx";
import AppFooter from "../appFooter/AppFooter.jsx";
import AppNavBar from '../appNavBar/AppNavBar.jsx';
import { Outlet } from 'react-router-dom';

import './MainSection.scss'

function MainSection({ title }) {
    return (
      <>
      <AppNavBar />
      <div className='main-section'>
        <Outlet />
        <AppFooter />
      </div>
    </>
    );
}

export default MainSection;


