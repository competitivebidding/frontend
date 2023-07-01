import React, {useState} from 'react';
import AppFooter from "../../../footer/AppFooter.js";
import AppNavBar from '../../../nav-bar/AppNavBar.tsx';
import {Outlet} from 'react-router-dom';

import './MainSection.scss'

export const MainSection = () => {
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



