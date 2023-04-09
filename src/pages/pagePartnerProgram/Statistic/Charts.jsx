import React from 'react';
import PlayersAmount from "@/pages/pagePartnerProgram/Statistic/PlayersAmount";
import styles from "./Charts.module.scss"
import Income from "@/pages/pagePartnerProgram/Statistic/Income";
import rotoIncome from "@/pages/pagePartnerProgram/Statistic/ChartsData/RotoIncome.js";
import rublesIncome from "@/pages/pagePartnerProgram/Statistic/ChartsData/RublesIncome.js";

function Charts() {
    return (
        <div className={styles.charts_list}>
            <PlayersAmount/>
            <Income currency={'ROTO'} data={rotoIncome} color={'#2F53FF'}/>
            <Income currency={'Rubles'} data={rublesIncome} color={'#00FFA3'}/>
        </div>
    );
}

export default Charts;
