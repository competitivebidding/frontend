import React from 'react'

import './Mission.scss'

interface IMissionProps {
  value: string
}

export const Mission = ({ value }: IMissionProps) => {
  return (
    <div className={'main__mission'}>
      <div className={'mission__title'}>Mission</div>
      <div className={'mission__subtitle'}>
        {value} lucky people who won the auction
        <span>{value}</span>
      </div>
      <div className={'mission__progressBar'}>
        <span></span>
      </div>
    </div>
  )
}
