import React, {useEffect, useState} from 'react';
import styles from './FullUser.module.scss';

function FullUser({userData}) {

    const {avatar, ign, id, startDate, earnedThisMonth, spentThisMonth, earned, spent} = userData;

    const days = 4;

    return (
        <div className={styles.user}>
            <div className={styles.user__identificators}>
                <img className={styles.user__avatar} src={avatar} alt={'avatar'}/>
                <div className={styles.user__ign}>{ign}</div>
                <div className={styles.user__id}>{`ID: ${id}`}</div>
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
            <div className={styles.user__spent}>{spent}</div>
        </div>
    );
}

export default FullUser;
