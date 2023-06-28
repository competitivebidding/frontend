import React from 'react';
import styles from "@/widgets/partners/ui/partners-statistic/PartnersStatistic.module.scss";
import PlayersAmount from "@/widgets/partners/ui/players-amount/PlayersAmount";
import Income from "@/shared/ui/charts/Income";

import rotoIncome from "@/shared/charts-data/RotoIncome";
import rublesIncome from "@/shared/charts-data/RublesIncome";

import BestInviters from "@/widgets/partners/ui/partners-statistic/ui/best-inviters/BestInviters";
import LastPays from "@/widgets/partners/ui/last-pays/LastPays";
import PartnersLists from "@/widgets/partners/ui/partners-statistic/ui/partners-list/PartnersLists";

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
