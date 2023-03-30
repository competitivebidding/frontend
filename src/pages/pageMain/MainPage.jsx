import React from 'react';
import AppNavBar from "../../components/appNavBar/AppNavBar.jsx";
import MainSection from "../../components/MainSection/MainSection.jsx";

function MainPage({title}) {
    return (
        <>
            <AppNavBar/>
            <MainSection PageContent={''} title={title}/> {/*Вставить свой контент*/}
        </>
    );
}

export default MainPage;
