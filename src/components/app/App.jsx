import React from 'react';
import AppNavBar from '../appNavBar/AppNavBar.jsx';
import AppHeader from '../appHeader/AppHeader.jsx';
import './App.scss'
import MainSection from "../MainSection/MainSection.jsx";

const App = () => {
    return (
        <div className='app'>
            <AppNavBar/>
            <MainSection/>
        </div>
    );
}

export default App;
