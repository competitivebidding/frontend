import React from 'react';
import AppHeader from '../../widgets/Header/AppHeader.jsx';
import PartnersStatistic from "@/pages/pagePartnerProgram/Statistic/PartnersStatistic";
import UserInfo from './UserInfo/UserInfo.jsx';
import useNoAuth from '../../shared/lib/hooks/useNoAuth.jsx';

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
