import React from 'react'

import './LastUser.scss'

interface ILastUserProps {
  country: string
  username: string
  id: number
  date: string
  time: string
}

export const LastUser = ({ country, username, id, date, time }: ILastUserProps) => {
  return (
    <div className='user'>
      <div className='user__circle-img'>
        {country}
      </div>
      <div className='user__info'>
        <p className='user__info_name'>{username}</p>
        <p className='user__info_id'>ID: {id}</p>
      </div>
      <div className='user__time'>
        <time className='user__time_data'>{date}</time>
        <time className='user__time_time'>{time}</time>
      </div>
    </div>
  )
}
