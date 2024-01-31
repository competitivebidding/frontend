import React, { FC } from 'react';
import cls from './NotificationCard.module.scss';

interface INotificationCardProps {
  id?: string;
  title: string;
  text: string;
  link: string;
  date: string;
  time: string;
  prizeImg: string;
}

const NotificationCard: FC<INotificationCardProps> = ({ id, title, text, link, date, time, prizeImg }) => {
  return (
      <div className={cls.note}>
        <img className={cls['note__note-img']} src={prizeImg} alt="prize" />
        <div className={cls['note-information']}>
          <div className={cls['note-infomation__note-texts']}>
            <h1 className={cls['note-information__note-texts__note-title']}> {title}</h1>
            <p className={cls['note-information__note-texts__note-text']}>{text}</p>
            <a href="#" className={cls['note-information__note-texts__note-link']}>
              {link}
            </a>
          </div>
          <div className={cls['note-information__note-dates']}>
            <h2 className={cls['note-information__note-dates__note-date']}>{date} </h2>
            <h3 className={cls['note-information__note-dates__note-time']}>{time}</h3>
          </div>
        </div>
      </div>
  );
}

export default NotificationCard;
