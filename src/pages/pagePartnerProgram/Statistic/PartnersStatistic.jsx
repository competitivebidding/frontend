import React from 'react';
import styles from "@/pages/pagePartnerProgram/Statistic/PartnersStatistic.module.scss";
import Charts from "@/pages/pagePartnerProgram/Statistic/Charts";
import PartnersLists from "@/pages/pagePartnerProgram/Statistic/PartnersLists";

function PartnersStatistic(props) {
    return (
        <div className={styles.statistic}>
            <Charts/>
            <PartnersLists/>
        </div>
    );
}

export default PartnersStatistic;
