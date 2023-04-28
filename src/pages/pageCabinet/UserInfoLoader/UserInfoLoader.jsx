import * as React from 'react';
import './UserInfoLoader.scss'

export const UserInfoLoader = () => {
    return (
        <article className="user-info">
            <div className="cabinet-block user-info__settings skeleton-box" />
            <div className="cabinet-block user-info__level skeleton-box"/>
            <div className="cabinet-block user-info__item skeleton-box"/>
            <div className="cabinet-block user-info__item skeleton-box"/>
            <div className="cabinet-block user-info__item skeleton-box" />
            <div className="cabinet-block user-info__item skeleton-box"/>
            <div className="cabinet-block user-info__item skeleton-box"/>
            <div className="cabinet-block user-info__item skeleton-box" />
        </article>
    );
};