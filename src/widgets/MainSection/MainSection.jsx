import React, {useState} from 'react';
import AppFooter from "../Footer/AppFooter.jsx";
import AppNavBar from '../NavBar/AppNavBar.jsx';
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


