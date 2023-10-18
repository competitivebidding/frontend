import React from 'react'
import styles from './InviterUser.module.scss'

import { useTranslation } from 'react-i18next'

interface InviterUser {
  avatar: string
  name: string
  subname: string
  amount: number
}

function InviterUser({ avatar, name, subname, amount }: InviterUser) {
  const { t } = useTranslation('partnerPage')

  return (
    <div className={styles.user}>
      <img src={avatar} alt="avatar" />
      <div className={styles.user__ign}>
        <p className={styles.user__name}>{name}</p>
        <p className={styles.user__subname}>{subname}</p>
      </div>
      <div className={styles.user__contribution}>
        <p>Brought</p>
        <span>{amount === 1 ? `${amount} ${t('person')}` : `${amount} ${t('people')}`}</span>
      </div>
    </div>
  )
}

export default InviterUser
