import React from 'react';
import PlayersAmount from "@/pages/pagePartnerProgram/Statistic/PlayersAmount";
import styles from "./Charts.module.scss"
import Income from "@/pages/pagePartnerProgram/Statistic/Income";

function Charts() {
    return (
        <div className={styles.charts_list}>
            <PlayersAmount/>
            <Income/>
        </div>
    );
}

export default Charts;
