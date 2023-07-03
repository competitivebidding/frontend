import React, { useEffect, useState } from 'react'
import styles from './FullUser.module.scss'

interface IFullUserProps {
  userData: {
    avatar: string
    ign: string
    id: number
    startDate: string
    earnedThisMonth: number
    spentThisMonth: number
    earned: number
    spent: number
  }
}

function FullUser({ userData }: IFullUserProps) {

  const days = 4

  return (
    <div className={styles.user}>
      <div className={styles.user__identificators}>
        <img className={styles.user__avatar} src={userData.avatar} alt={'avatar'} />
        <p className={styles.user__ign}>{userData.ign}</p>
        <p className={styles.user__id}>{`ID: ${userData.id}`}</p>
      </div>
      <div className={styles.user__startDate}>
        {userData.startDate}
        <p className={styles.user__daysIn}>
          {`${days} days`}
        </p>
      </div>
      <div className={styles.user__earnedThisMonth}>
        {userData.earnedThisMonth}
        <span>ROTO</span>
      </div>
      <div className={styles.user__spentThisMonth}>{userData.spentThisMonth}</div>
      <div className={styles.user__earned}>
        {userData.earned}
        <span>ROTO</span>
      </div>
      <span className={styles.user__spent}>{userData.spent}</span>
    </div>
  )
}

export default FullUser
