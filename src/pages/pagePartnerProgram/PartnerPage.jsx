import React from 'react';
import AppHeader from '../../components/appHeader/AppHeader.jsx';
import PartnersStatistic from "@/pages/pagePartnerProgram/Statistic/PartnersStatistic";
import UserInfo from './UserInfo/UserInfo.jsx';
import useNoAuth from '../../hooks/UsenoAuth.jsx';

const PartnerPage = ({title}) => {

    useNoAuth();

    return (
        <div>
            <AppHeader title={title}/>
            <UserInfo/>
            <PartnersStatistic/>
        </div>
    )
}

export default PartnerPage
