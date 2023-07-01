import React, {useState} from 'react';
import styles from "@/shared/ui/charts/Income.module.scss";
import arrow from "@assets/Partners/arrow.svg"
import BarChart from "@/shared/ui/charts/BarChart";

interface IDoubleIncomeProps {

}

function DoubleIncome({currency, color, data}) {
    const [filterValue, setFilterValue] = useState('Last week');
    const [dropdownVisibility, setDropdownVisibility] = useState(false);
    const [isROTO, setIsROTO] = useState(false);

    return (
        <div className={styles.income_chart}>
            <div className={styles.income_chart__header}>
                <h3 className={styles.income_chart__title}>Income</h3>
                <div className={styles.header__container}>
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
                    <div className={styles.income_chart__currencyPick}>
                        <label className={styles.currencyPick}>
                            <input
                                type="checkbox"
                                checked={isROTO}
                                onChange={(e) => {e.target.checked = isROTO}}
                            />
                            <p>ROTO</p>
                            <span className={styles.checkmark + ' ' + styles.checkmark_roto} onClick={() => setIsROTO(true)}></span>
                        </label>
                        <label className={styles.currencyPick}>
                            <input
                                type="checkbox"
                                checked={!isROTO}
                                onChange={(e) => {e.target.checked = !isROTO}}
                            />
                            <p>Rubles</p>
                            <span className={styles.checkmark} onClick={() => setIsROTO(false)}></span>
                        </label>
                    </div>
                </div>
                <div className={styles.income_chart__subheader}>
                    <div className={styles.income_chart__currency}><span style={{background: (isROTO ? color[0] : color[1])}}></span>{isROTO ? currency[0] : currency[1]}</div>
                    <div className={styles.income_chart__total}>Total earnings: {(isROTO ? data[0] : data[1]).datasets[0].data.reduce((acc, v) => acc + v, 0)} {isROTO ? currency[0] : currency[1]}</div>
                </div>
            </div>
            {isROTO ? <BarChart data={data[0]} color={color[0]}/> : <BarChart data={data[1]} color={color[1]}/>}
        </div>
    );
}

export default DoubleIncome;
