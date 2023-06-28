import React from 'react';
import AppHeader from '../../widgets/header/AppHeader.jsx';
import { PartnerStatistic } from "@/widgets/partners";
import { UserInfoPartnerProgram } from '@/widgets/user-info';
import useNoAuth from '../../shared/lib/hooks/useNoAuth.jsx';

const PartnerPage = ({title}) => {

    useNoAuth();

    return (
        <div>
            <AppHeader title={title}/>
            <UserInfoPartnerProgram/>
            <PartnerStatistic/>
        </div>
    )
}

export default PartnerPage
