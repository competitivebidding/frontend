import React from 'react';
import AppHeader from '../../widgets/header/AppHeader.jsx';
import { PartnersStatistic } from "@/entities/partners";
import { UserInfoPartnerProgram } from '@/entities/user/ui/user-info';
import useNoAuth from '../../shared/lib/useNoAuth.ts';

const PartnerPage = ({title}) => {

    useNoAuth();

    return (
        <div>
            <AppHeader title={title}/>
            <UserInfoPartnerProgram/>
            <PartnersStatistic/>
        </div>
    )
}

export default PartnerPage
