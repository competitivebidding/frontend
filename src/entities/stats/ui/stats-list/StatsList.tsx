import React from 'react'

import { StatsItem } from '../stats-item/StatsItem'

import cls from './StatsList.module.scss'

import StatsData from './Data/StatsData'

export const StatsList = () => {
  const getData = StatsData.map((stat) => {
    return <StatsItem key={stat.id} styles={stat.styles} title={stat.title} text={stat.text} image={stat.image} />
  })

  return <div className={cls.main__stats}>{getData}</div>
}
