import React from 'react'
import AppHeader from '../../widgets/header/AppHeader.js'
import './NotificationsPage.scss'
import NotificationCard from '../../widgets/notification-card/NotificationCard.js'

import useNoAuth from '../../shared/lib/useNoAuth.js'

const NotificationsPage = () => {
  useNoAuth()
  const data = [
    {
      title: 'Iphone 14 pro за 32 999 ₽',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      link: 'Перейти на страницу лота',
      date: '16/02/2023',
      time: '22:32',
      id: 1,
      prizeImg: 'src/pages/notifications/temporary-auctions-img/prize.svg',
    },
    {
      title: 'Iphone 14 pro за 32 999 ₽',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      link: 'Перейти на страницу лота',
      date: '16/02/2023',
      time: '22:32',
      id: 2,
      prizeImg: 'src/pages/notifications/temporary-auctions-img/prize.svg',
    },
    {
      title: 'Iphone 14 pro за 32 999 ₽',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      link: 'Перейти на страницу лота',
      date: '16/02/2023',
      time: '22:32',
      id: 3,
      prizeImg: 'src/pages/notifications/temporary-auctions-img/prize.svg',
    },
  ]

  return (
    <div className="notes">
      {data.map((obj) => (
        <NotificationCard
          key={obj.id}
          title={obj.title}
          text={obj.text}
          link={obj.link}
          date={obj.date}
          time={obj.time}
          prizeImg={obj.prizeImg}
        />
      ))}
    </div>
  )
}

export default NotificationsPage