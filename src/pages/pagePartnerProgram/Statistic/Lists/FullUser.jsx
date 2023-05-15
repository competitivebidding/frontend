import React, {useEffect, useState} from 'react';
import styles from './FullUser.module.scss';

function FullUser({userData}) {

    const {avatar, ign, id, startDate, earnedThisMonth, spentThisMonth, earned, spent} = userData;

    const days = 4;

    return (
        <div className={styles.user}>
            <div className={styles.user__identificators}>
                <img className={styles.user__avatar} src={avatar} alt={'avatar'}/>
                <p className={styles.user__ign}>{ign}</p>
                <p className={styles.user__id}>{`ID: ${id}`}</p>
            </div>
            <div className={styles.user__startDate}>
                {startDate}
                <p className={styles.user__daysIn}>
                    {`${days} days`}
                </p>
            </div>
            <div className={styles.user__earnedThisMonth}>
                {earnedThisMonth}
                <span>ROTO</span>
            </div>
            <div className={styles.user__spentThisMonth}>{spentThisMonth}</div>
            <div className={styles.user__earned}>
                {earned}
                <span>ROTO</span>
            </div>
            <span className={styles.user__spent}>{spent}</span>
        </div>
    );
}

export default FullUser;
