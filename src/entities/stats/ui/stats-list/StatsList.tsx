import React from 'react'
import { StatsItem } from '../stats-item/StatsItem'
import cls from './StatsList.module.scss'
import StatsData from './Data/StatsData'
import { useTranslation } from 'react-i18next'

export const StatsList = () => {
  const { t } = useTranslation('mainPage')

  const getData = StatsData.map((stat) => {
    return <StatsItem key={stat.id} styles={stat.styles} title={t(stat.title)} text={stat.text} image={stat.image} />
  })

  return <div className={cls.main__stats}>{getData}</div>
}
