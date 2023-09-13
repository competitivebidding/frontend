import React from 'react'
import './LastUsersList.scss'
import { LastUser } from '../last-user/LastUser'

import LastUsersData from '../last-user/Data/LastUsersData'

export const LastUsersList = () => {
  const getData = LastUsersData.map((user) => {
    return (
      <LastUser
        key={user.id}
        country={user.country}
        username={user.username}
        id={user.id}
        date={user.date}
        time={user.time}
      />
    )
  })

  return (
    <div className="last-users">
      <h2 className="last-users__title">Latest registrations</h2>
      <div className="last-users__top">
        <p className="last-users__top_text">Country</p>
        <p className="last-users__top_text">E-mail</p>
        <p className="last-users__top_text">Date</p>
      </div>

      {getData}
    </div>
  )
}
