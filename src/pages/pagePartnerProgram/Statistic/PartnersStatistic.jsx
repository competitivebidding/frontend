import React from 'react';
import styles from "@/pages/pagePartnerProgram/Statistic/PartnersStatistic.module.scss";
import PlayersAmount from "@/pages/pagePartnerProgram/Statistic/PlayersAmount";
import Income from "@/pages/pagePartnerProgram/Statistic/Income";

import rotoIncome from "@/pages/pagePartnerProgram/Statistic/ChartsData/RotoIncome";
import rublesIncome from "@/pages/pagePartnerProgram/Statistic/ChartsData/RublesIncome";

import BestInviters from "@/pages/pagePartnerProgram/Statistic/Lists/BestInviters";
import LastPays from "@/pages/pagePartnerProgram/Statistic/Lists/LastPays";
import PartnersLists from "@/pages/pagePartnerProgram/Statistic/Lists/PartnersLists";

function PartnersStatistic() {
    return (
        <div className={styles.statistic}>

            <PlayersAmount/>
            <BestInviters/>

            <Income currency={'ROTO'} data={rotoIncome} color={'#2F53FF'}/>
            <Income currency={'Rubles'} data={rublesIncome} color={'#00FFA3'}/>

            <div className={styles.statistic__list_container}>
                <LastPays/>
            </div>
            <PartnersLists/>
        </div>
    );
}

export default PartnersStatistic;
