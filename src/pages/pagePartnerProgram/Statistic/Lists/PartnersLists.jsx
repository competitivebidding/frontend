import React, {useState} from 'react';
import styles from "./PartnersLists.module.scss"


function PartnersLists(props) {

    return (
        <div className={styles.lists}>
            <div className={styles.header}>
                <div className={styles.header__filter + ' ' + styles.header__filter_partner}>
                    <h4>Partner</h4>
                    <span className={styles.icon}></span>
                </div>
                <div className={styles.header__filter + ' ' + styles.header__filter_join}>
                    <h4>Join date</h4>
                    <span className={styles.icon}></span>
                </div>
                <div className={styles.header__filter + ' ' + styles.header__filter_spentM}>
                    <h4>Spent this month</h4>
                    <span className={styles.icon}></span>
                </div>
                <div className={styles.header__filter + ' ' + styles.header__filter_earnedM}>
                    <h4>Earned this month</h4>
                    <span className={styles.icon}></span>
                </div>
                <div className={styles.header__filter + ' ' + styles.header__filter_spent}>
                    <h4>Total earns</h4>
                    <span className={styles.icon}></span>
                </div>
                <div className={styles.header__filter + ' ' + styles.header__filter_earned}>
                    <h4>Total spends</h4>
                    <span className={styles.icon}></span>
                </div>
            </div>
        </div>
    );
}

export default PartnersLists;
