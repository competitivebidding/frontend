import React from 'react';
import AppNavBar from "../../components/appNavBar/AppNavBar.jsx";
import MainSection from "../../components/MainSection/MainSection.jsx";
import Content from "../pagePartnerProgram/Content.jsx";

const SupportPage = ({title}) => {
  return (
    <div>
      <AppNavBar/>
      <MainSection PageContent={''} title={title}/> {/*Вставить свой контент*/}
    </div>
  );
}

export default SupportPage;
