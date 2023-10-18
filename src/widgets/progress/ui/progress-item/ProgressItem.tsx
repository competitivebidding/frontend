import React, { FC } from 'react'

import cls from './ProgressItem.module.scss'

interface IProgressItemProps {
  styles: string
  value: string
  text: string
}

export const ProgressItem: FC<IProgressItemProps> = ({ styles, value, text }) => {
  return (
    <li className={`${cls['listItem-item']} ${styles}`}>
      <div className={cls.item__value}>{value}</div>
      <span className={cls.item__marker}>{text}</span>
    </li>
    
  )
}
