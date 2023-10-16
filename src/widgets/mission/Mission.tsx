import React from 'react'

import cls from './Mission.module.scss'

interface IMissionProps {
  value: string
}

export const Mission = ({ value }: IMissionProps) => {
  return (
    <div className={cls['main__mission']}>
      <div className={cls['mission__title']}>Mission</div>
      <div className={cls['mission__subtitle']}>
        {value} lucky people who won the auction
        <span>{value}</span>
      </div>
      <div className={cls['mission__progressBar']}>
        <span></span>
      </div>
    </div>
  )
}
