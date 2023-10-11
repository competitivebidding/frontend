import React from 'react';
import cls from './LastUser.module.scss';

interface ILastUserProps {
    country: string;
    username: string;
    id: number;
    date: string;
    time: string;
}

export const LastUser = ({ country, username, id, date, time }: ILastUserProps) => {
    return (
        <div className={cls.user}>
            <div className={cls.user__circleImg}>{country}</div>
            <div className={cls.user__info}>
                <p className={cls.user__info_name}>{username}</p>
                <p className={cls.user__info_id}>ID: {id}</p>
            </div>
            <div className={cls.user__time}>
                <time className={cls.user__time_data}>{date}</time>
                <time className={cls.user__time_time}>{time}</time>
            </div>
        </div>
    );
};

