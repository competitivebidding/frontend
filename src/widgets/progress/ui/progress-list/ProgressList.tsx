import React, { useState } from 'react'

import { ProgressItem } from '../progress-item/ProgressItem'

import cls from './ProgressList.module.scss'

import ProgressListData from './Data/ProgressListData'
import { useTranslation } from 'react-i18next'

export const ProgressList = () => {
  const { t } = useTranslation('mainPage')

  const getData = ProgressListData.map((list) => {
    return <ProgressItem key={list.value} styles={list.styles} text={t(list.text)} value={list.value} />
  })

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`${cls.main__howItWorks} ${isOpen ? cls.open : ''}`}>
      <div className={cls.howItWorks__title}>{t('How it works')}?</div>
      <div className={cls.howItWorks__subtitle}>
        {t('In the')} <u>{t('auction')}</u> {t('section, various offers in demand on the market are put up for auction: gadgets, electronics, jewelry, cryptocurrencies, cars, and more')}.
      </div>
      <div className={cls.howItWorks__progress}>
        <ul className={cls.progress__list}>{getData}</ul>
      </div>
      <button className={cls['accordion-btn']} onClick={() => setIsOpen(!isOpen)}>
      {t('Expand')}<span></span>
      </button>
    </div>
  )
}
