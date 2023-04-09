import React from 'react';
import AppHeader from '../../components/appHeader/AppHeader.jsx';
import PartnersStatistic from "@/pages/pagePartnerProgram/Statistic/PartnersStatistic";

const PartnerPage = ({title}) => {
    return (
        <div>
            <AppHeader title={title}/>
            <PartnersStatistic/>
        </div>
    );
}

export default PartnerPage;
