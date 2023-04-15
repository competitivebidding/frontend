import React, {useState} from 'react';
import styles from "@/pages/pagePartnerProgram/Statistic/Income.module.scss";
import arrow from "@assets/Partners/arrow.svg"
import BarChart from "@/components/Charts/BarChart";

function Income({currency, color, data}) {
    const [filterValue, setFilterValue] = useState('Last week');
    const [dropdownVisibility, setDropdownVisibility] = useState(false);

    return (
        <div className={styles.income_chart}>
            <div className={styles.income_chart__header}>
                <h3 className={styles.income_chart__title}>Income</h3>
                <div className={styles.filter}>
                    <p className={styles.filter__current}>
                        <span>{filterValue}</span>
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
                <div className={styles.income_chart__subheader}>
                    <div className={styles.income_chart__currency}><span style={{background: color}}></span>{currency}</div>
                    <div className={styles.income_chart__total}>Total earnings: {data.datasets[0].data.reduce((acc, v) => acc + v, 0)} {currency}</div>
                </div>
            </div>
            <div className={styles.income_chart__body}>
                <BarChart data={data} color={color}/>
            </div>
        </div>
    );
}

export default Income;
