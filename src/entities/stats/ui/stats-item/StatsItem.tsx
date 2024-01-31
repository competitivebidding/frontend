import React from 'react'

import cls from './StatsItem.module.scss'

interface IStatsItemProps {
  styles: string
  title: string
  text: string
  image: string
}

export const StatsItem = (props: IStatsItemProps) => {
  return (
    <div className={`${cls.stats__item} ${props.styles || ''}`}>
      <div className={cls.stats__title}>{props.title}</div>
      <div className={cls.stats__content}>{props.text}</div>
      <div className={cls.stats__image}>
        <img src={props.image || ''} alt="" />
      </div>
    </div>
  )
}
