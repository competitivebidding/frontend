import React from 'react';
import cls from './LastUsersList.module.scss'; // Используем переменную cls

import LastUsersData from '../last-user/Data/LastUsersData';
import {LastUser} from "@entities/user";

export const LastUsersList = () => {
    const getData = LastUsersData.map((user) => (
        <LastUser
            key={user.id}
            country={user.country}
            username={user.username}
            id={user.id}
            date={user.date}
            time={user.time}
        />
    ));

    return (
        <div className={cls['last-users']}>
            <h2 className={cls['last-users__title']}>Latest registrations</h2>
            <div className={cls['last-users__top']}>
                <p className={cls['last-users__top_text']}>Country</p>
                <p className={cls['last-users__top_text']}>E-mail</p>
                <p className={cls['last-users__top_text']}>Date</p>
            </div>

            {getData}
        </div>
    );
};

