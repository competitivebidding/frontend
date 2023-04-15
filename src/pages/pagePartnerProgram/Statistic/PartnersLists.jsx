import React, {useState} from 'react';
import styles from "./PartnersLists.module.scss"
import BestInviters from "@/pages/pagePartnerProgram/Statistic/Lists/BestInviters.jsx";
import LastPays from "@/pages/pagePartnerProgram/Statistic/Lists/LastPays";

function PartnersLists(props) {

    return (
        <div className={styles.lists}>
            <BestInviters/>
            <LastPays/>
        </div>
    );
}

export default PartnersLists;
