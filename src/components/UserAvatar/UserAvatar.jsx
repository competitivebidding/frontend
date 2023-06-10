import React from 'react';
import cls from './UserAvatar.module.scss'
import avatar from '@assets/cabinet/icons/avatar.svg'

export const UserAvatar = ({avatarUrl, onClick, className, width = 78, height = 78}) => {
    return (
        <img
            src={avatarUrl ? avatarUrl : avatar}
            alt="avatar" width={width}
            height={height}
            className={`${cls.avatar} ${className}`}
            onClick={onClick}/>
    );
}

