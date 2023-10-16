import React from 'react';
import cls from './LastUsersList.module.scss';

import LastUsersData from '../last-user/Data/LastUsersData';
import {LastUser} from "@entities/user";
import { useTranslation } from 'react-i18next'

export const LastUsersList = () => {
    const { t } = useTranslation('lastUsersList')

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
            <h2 className={cls['last-users__title']}>{t('Latest registrations')}</h2>
            <div className={cls['last-users__top']}>
                <p className={cls['last-users__top_text']}>{t('Country')}</p>
                <p className={cls['last-users__top_text']}>{t('E-mail')}</p>
                <p className={cls['last-users__top_text']}>{t('Date')}</p>
            </div>
            {getData}
        </div>
    );
};

