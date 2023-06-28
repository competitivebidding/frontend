import React from 'react';
import PlayersAmount from "@/widgets/partners/ui/players-amount/PlayersAmount";
import styles from "./Charts.module.scss"
import Income from "@/shared/ui/charts/Income";
import rotoIncome from "@/shared/charts-data/RotoIncome.js";
import rublesIncome from "@/shared/charts-data/RublesIncome.js";

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
