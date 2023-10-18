import React, { useState } from 'react'
import styles from '../../shared/ui/charts/Income.module.scss'
import arrow from '@assets/Partners/arrow.svg'
import BarChart from '@shared/ui/charts/BarChart'
import { ChartData } from 'chart.js'
import { useTranslation } from 'react-i18next'

interface IDoubleIncomeProps {
  currency: string[]
  color: string[]
  data: ChartData<'bar', number[], string[]>[]
}

function DoubleIncome({ currency, color, data }: IDoubleIncomeProps) {
  const [filterValue, setFilterValue] = useState<string>('Last week')
  const [dropdownVisibility, setDropdownVisibility] = useState<boolean>(false)
  const [isROTO, setIsROTO] = useState<boolean>(false)
  const { t } = useTranslation('cabinetPage')

  return (
    <div className={styles.income_chart}>
      <div className={styles.income_chart__header}>
        <h3 className={styles.income_chart__title}>{t('Income')}</h3>
        <div className={styles.header__container}>
          <div className={styles.filter}>
            <p className={styles.filter__current}>
              <span>{t(filterValue)}</span>
              <img
                src={arrow}
                className={dropdownVisibility ? styles.arrow : styles.arrow + ' ' + styles.arrow_visible}
                onClick={() => setDropdownVisibility(!dropdownVisibility)}
              ></img>
            </p>
            <div
              className={
                dropdownVisibility
                  ? styles.filter__dropdown
                  : styles.filter__dropdown + ' ' + styles.filter__dropdown_visible
              }
            >
              <div
                className={styles.filter__item}
                onClick={() => {
                  setFilterValue('Last week')
                  setDropdownVisibility(!dropdownVisibility)
                }}
              >
                {t('Last week')}
              </div>
              <div
                className={styles.filter__item}
                onClick={() => {
                  setFilterValue('Last month')
                  setDropdownVisibility(!dropdownVisibility)
                }}
              >
                {t('Last month')}
              </div>
              <div
                className={styles.filter__item}
                onClick={() => {
                  setFilterValue('Last year')
                  setDropdownVisibility(!dropdownVisibility)
                }}
              >
                {t('Last year')}
              </div>
            </div>
          </div>
          <div className={styles.income_chart__currencyPick}>
            <label className={styles.currencyPick}>
              <input
                type="checkbox"
                checked={isROTO}
                onChange={(e) => {
                  e.target.checked = isROTO
                }}
              />
              <p>ROTO</p>
              <span className={styles.checkmark + ' ' + styles.checkmark_roto} onClick={() => setIsROTO(true)}></span>
            </label>
            <label className={styles.currencyPick}>
              <input
                type="checkbox"
                checked={!isROTO}
                onChange={(e) => {
                  e.target.checked = !isROTO
                }}
              />
              <p>ROTO</p>
              <span className={styles.checkmark} onClick={() => setIsROTO(false)}></span>
            </label>
          </div>
        </div>
        <div className={styles.income_chart__subheader}>
          <div className={styles.income_chart__currency}>
            <span style={{ background: isROTO ? color[0] : color[1] }}></span>
            {isROTO ? currency[0] : currency[1]}
          </div>
          <div className={styles.income_chart__total}>
            {t('Total earnings')}: {(isROTO ? data[0] : data[1]).datasets[0].data.reduce((acc: any, v: any) => acc + v, 0)}{' '}
            {isROTO ? currency[0] : currency[1]}
          </div>
        </div>
      </div>
      <BarChart data={data[isROTO ? 0 : 1]} color={color[isROTO ? 0 : 1]} />
    </div>
  )
}

export default DoubleIncome
