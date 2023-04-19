import React, {useState} from 'react';
import styles from "./PartnersLists.module.scss"
import PartnersListFilter from "@/pages/pagePartnerProgram/Statistic/Lists/PartnersListFilter";


function PartnersLists() {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className={styles.lists}>
            <div className={styles.header}>
                <div className={styles.header__filter + ' ' + styles.header__filter_partner}>
                    <h4>Partner</h4>
                    <PartnersListFilter isClicked={isClicked}/>
                </div>
                <div className={styles.header__filter + ' ' + styles.header__filter_join}>
                    <h4>Join date</h4>
                    <PartnersListFilter isClicked={isClicked}/>
                </div>
                <div className={styles.header__filter + ' ' + styles.header__filter_spentM}>
                    <h4>Spent this month</h4>
                    <PartnersListFilter isClicked={isClicked}/>
                </div>
                <div className={styles.header__filter + ' ' + styles.header__filter_earnedM}>
                    <h4>Earned this month</h4>
                    <PartnersListFilter isClicked={isClicked}/>
                </div>
                <div className={styles.header__filter + ' ' + styles.header__filter_spent}>
                    <h4>Total earns</h4>
                    <PartnersListFilter isClicked={isClicked}/>
                </div>
                <div className={styles.header__filter + ' ' + styles.header__filter_earned}>
                    <h4>Total spends</h4>
                    <PartnersListFilter isClicked={isClicked}/>
                </div>
            </div>
        </div>
    );
}

export default PartnersLists;
