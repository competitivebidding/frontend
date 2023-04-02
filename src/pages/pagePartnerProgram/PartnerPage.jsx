import React from 'react';
import AppHeader from '../../components/appHeader/AppHeader.jsx';
import Charts from "./Statistic/Charts.jsx";
import PartnersLists from "@/pages/pagePartnerProgram/Statistic/PartnersLists";
import styles from "./Statistic/Statistic.module.scss"

const PartnerPage = ({title}) => {
    return (
        <div>
            <AppHeader title={title}/>
            <section className={styles.statistic}>
                <Charts/>
                <PartnersLists/>
            </section>
        </div>
    );
}

export default PartnerPage;
