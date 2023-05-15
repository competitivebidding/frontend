import React, {useState} from 'react';
// import AppHeader from "../appHeader/AppHeader.jsx";
import AppFooter from "../appFooter/AppFooter.jsx";
import AppNavBar from '../appNavBar/AppNavBar.jsx';
import {Outlet} from 'react-router-dom';

import './MainSection.scss'

function MainSection() {

    const userWidth = window.innerWidth;

    return (
        <>
            {userWidth > 1000 && <AppNavBar/>}
            <div className='main-section'>
                <Outlet/>
                <AppFooter/>
            </div>
        </>
    );
}

export default MainSection;


