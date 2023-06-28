import React from 'react'

const NotificationCard = ({ id, title, text, link, date, time, prizeImg }) => {
  return (
    <div className="note">
      <img className="note__note-img" src="/src/assets/temporary-notifications-img/prize.svg" alt="prize" />
      <div className="note-information">
        <div className="note-infomation__note-texts">
          <h1 className="note-information__note-texts__note-title"> {title}</h1>
          <p className="note-information__note-texts__note-text">{text}</p>
          <a href="#" className="note-information__note-texts__note-link">
            {link}{' '}
          </a>
        </div>
        <div className="note-information__note-dates">
          <h2 className="note-information__note-dates__note-date">{date} </h2>
          <h3 className="note-information__note-dates__note-time">{time}</h3>
        </div>
      </div>
    </div>
  )
}

export default NotificationCard
