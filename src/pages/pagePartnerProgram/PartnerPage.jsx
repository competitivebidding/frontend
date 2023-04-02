import React from 'react';
import AppHeader from '../../components/appHeader/AppHeader.jsx';
import ChartsContainer from "./Statistic/ChartsContainer.jsx";

const PartnerPage = ({title}) => {
    return (
        <div>
            <AppHeader title={title}/>
            <section className='statistic'>
                <ChartsContainer/>
            </section>
        </div>
    );
}

export default PartnerPage;
