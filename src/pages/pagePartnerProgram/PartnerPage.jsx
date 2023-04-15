import React from 'react';
import AppHeader from '../../components/appHeader/AppHeader.jsx';
import PartnersStatistic from "@/pages/pagePartnerProgram/Statistic/PartnersStatistic";
import UserInfo from './UserInfo/UserInfo.jsx';

const PartnerPage = ({ title }) => {
  return (
    <div>
      <AppHeader title={title}/>
      <UserInfo/>
        <PartnersStatistic/>
    </div>
  )
}

export default PartnerPage
