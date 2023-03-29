import React from 'react';
import AppHeader from "../appHeader/AppHeader.jsx";
import AppFooter from "../appFooter/AppFooter.jsx";

import './MainSection.scss'

function MainSection({pageSection}) {
    return (
        <div className='main-section'>
            <AppHeader />
            {pageSection}
            <AppFooter/>
        </div>
    );
}

export default MainSection;
