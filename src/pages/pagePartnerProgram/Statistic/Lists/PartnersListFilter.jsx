import React, {useState} from 'react';
import styles from "@/pages/pagePartnerProgram/Statistic/Lists/PartnersListFilter.module.scss";

function PartnersListFilter({isClicked}) {
    const [isActive, setIsActive] = useState(isClicked);

    return (
        <span className={isActive ? styles.icon + ' ' +  styles.icon_clicked: styles.icon} onClick={() => setIsActive(!isActive)}></span>
    );
}

export default PartnersListFilter;
