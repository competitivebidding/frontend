import React, {useState} from 'react';
import styles from "@/pages/pagePartnerProgram/Statistic/Income.module.scss";
import arrow from "@assets/Partners/arrow.svg"
import BarChart from "@/pages/pagePartnerProgram/Statistic/Charts/BarChart";
import {UserData} from "@/pages/pagePartnerProgram/Statistic/Sklad govna/Data";

function Income() {
    const [filterValue, setFilterValue] = useState('Last week');
    const [dropdownVisibility, setDropdownVisibility] = useState(false);

    return (
        <div className={styles.chart}>
            <div className={styles.chart__header}>
                <h3 className={styles.chart__title}>Income</h3>
                <div className={styles.filter}>
                    <p className={styles.filter__current}>
                        {filterValue}
                        <img src={arrow} className={dropdownVisibility ? styles.arrow : styles.arrow + ' ' + styles.arrow_visible} onClick={() => setDropdownVisibility(!dropdownVisibility)}></img>
                    </p>
                    <div
                        className={dropdownVisibility ? styles.filter__dropdown : styles.filter__dropdown + ' ' + styles.filter__dropdown_visible}
                    >
                        <div className={styles.filter__item}
                             onClick={() => {
                                 setFilterValue('Last week')
                                 setDropdownVisibility(!dropdownVisibility)
                             }}
                        >
                            Last week
                        </div>
                        <div className={styles.filter__item}
                             onClick={() => {
                                 setFilterValue('Last month')
                                 setDropdownVisibility(!dropdownVisibility)
                             }}
                        >
                            Last month
                        </div>
                        <div className={styles.filter__item}
                             onClick={() => {
                                 setFilterValue('Last year')
                                 setDropdownVisibility(!dropdownVisibility)
                             }}
                        >
                            Last year
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.chart__body}>
                <BarChart data={UserData}/>
            </div>
        </div>
    );
}

export default Income;
