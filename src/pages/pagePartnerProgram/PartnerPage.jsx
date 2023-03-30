import React from 'react';
import AppNavBar from "../../components/appNavBar/AppNavBar.jsx";
import MainSection from "../../components/MainSection/MainSection.jsx";
import Content from "./Content.jsx";

const PartnerPage = ({title}) => {
    return (
        <>
            <AppNavBar/>
            <MainSection PageContent={Content} title={title}/>
        </>
    );
}

export default PartnerPage;
