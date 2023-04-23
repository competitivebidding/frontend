import React from 'react';
import AppHeader from '../../components/appHeader/AppHeader.jsx';
import UserInfo from "@/pages/pagePartnerProgram/UserInfo/UserInfo";
import styles from "./Cabinet.module.scss"
import PlayersAmount from "@/pages/pagePartnerProgram/Statistic/PlayersAmount";
import RotoIncome from "@/pages/pageCabinet/ChartsData/RotoIncome";
import DoubleIncome from "@/pages/pageCabinet/DoubleIncome";
import RublesIncome from "@/pages/pageCabinet/ChartsData/RublesIncome";

const CabinetPage = ({title}) => {
    return (
        <div className={styles.cabinet}>
            <AppHeader title={title}/>
            <UserInfo/>
            <div className={styles.cabinet__charts}>
                <PlayersAmount/>
                <DoubleIncome currency={['ROTO', 'Rubles']} data={[RotoIncome, RublesIncome]} color={['#2F53FF', '#00FFA3']}/>
            </div>
        </div>
    );
}

export default CabinetPage;
