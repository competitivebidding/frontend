import React, {useState} from 'react';
import AppFooter from "../appFooter/AppFooter.jsx";
import AppNavBar from '../appNavBar/AppNavBar.jsx';
import AppHeader from "../appHeader/AppHeader";
import {Outlet} from 'react-router-dom';

import './MainSection.scss'

function MainSection() {

    const userWidth = window.innerWidth;

    return (
        <>
            {userWidth > 1000 && <AppNavBar/>}
            <div className='main-section'>
                {/*<AppHeader title={'asd'} />*/}
                <Outlet/>
                <AppFooter/>
            </div>
        </>
    );
}

export default MainSection;


