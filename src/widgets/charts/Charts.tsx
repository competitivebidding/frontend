import React from 'react';
import styles from "./Charts.module.scss"
import { rublesIncome } from '@shared/charts-data/RublesIncome';
import { rotoIncome } from '@shared/charts-data/RotoIncome';
import Income from "../../shared/ui/charts/Income";
import PlayersAmount from "@features/players-amount/PlayersAmount";

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
