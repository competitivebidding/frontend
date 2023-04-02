import React, {useState} from 'react';
import styles from "./PartnersLists.module.scss"
import BestInviters from "@/pages/pagePartnerProgram/Statistic/Lists/BestInviters.jsx";

function PartnersLists(props) {

    return (
        <div className={styles.lists}>
            <BestInviters/>
        </div>
    );
}

export default PartnersLists;
