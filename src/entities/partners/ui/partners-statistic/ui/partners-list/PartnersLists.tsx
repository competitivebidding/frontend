import React, { useState, useEffect } from 'react'
import styles from './PartnersLists.module.scss'
import { FilterButton } from '@/features/filter-button/FilterButton'
import FullUser from '@/entities/partners/ui/partners-statistic/ui/full-user/FullUser'
import avatar from '@assets/Partners/User.svg'
import { useTranslation } from 'react-i18next'


function PartnersLists() {
  const [isClicked, setIsClicked] = useState(false)
  const { t } = useTranslation('partnerPage')

  const users = [
    {
      avatar: avatar,
      ign: 'User User2',
      id: 56789085,
      startDate: '21.01.2023',
      earnedThisMonth: 22,
      spentThisMonth: 4,
      earned: 22,
      spent: 4,
    },
    {
      avatar: avatar,
      ign: 'User User1',
      id: 56789086,
      startDate: '22.01.2023',
      earnedThisMonth: 22,
      spentThisMonth: 4,
      earned: 22,
      spent: 4,
    },
    {
      avatar: avatar,
      ign: 'User User3',
      id: 56789087,
      startDate: '22.01.2023',
      earnedThisMonth: 22,
      spentThisMonth: 4,
      earned: 22,
      spent: 4,
    },
    {
      avatar: avatar,
      ign: 'User User4',
      id: 56789088,
      startDate: '22.01.2023',
      earnedThisMonth: 22,
      spentThisMonth: 4,
      earned: 22,
      spent: 4,
    },
    {
      avatar: avatar,
      ign: 'User User6',
      id: 56789089,
      startDate: '22.01.2023',
      earnedThisMonth: 22,
      spentThisMonth: 4,
      earned: 22,
      spent: 4,
    },
    {
      avatar: avatar,
      ign: 'User User7',
      id: 56789090,
      startDate: '22.01.2023',
      earnedThisMonth: 22,
      spentThisMonth: 4,
      earned: 22,
      spent: 4,
    },
  ]

  return (
    <div className={styles.lists}>
      <div className={styles.header}>
        <div className={styles.header__filter + ' ' + styles.header__filter_partner}>
          <h4>{t('Partner')}</h4>
          <FilterButton isClicked={isClicked} />
        </div>
        <div className={styles.header__filter + ' ' + styles.header__filter_join}>
          <h4>{t('Join date')}</h4>
          <FilterButton isClicked={isClicked} />
        </div>
        <div className={styles.header__filter + ' ' + styles.header__filter_spentM}>
          <h4>{t('Spent this month')}</h4>
          <FilterButton isClicked={isClicked} />
        </div>
        <div className={styles.header__filter + ' ' + styles.header__filter_earnedM}>
          <h4>{t('Earned this month')}</h4>
          <FilterButton isClicked={isClicked} />
        </div>
        <div className={styles.header__filter + ' ' + styles.header__filter_spent}>
          <h4>{t('Total earns')}</h4>
          <FilterButton isClicked={isClicked} />
        </div>
        <div className={styles.header__filter + ' ' + styles.header__filter_earned}>
          <h4>{t('Total spends')}</h4>
          <FilterButton isClicked={isClicked} />
        </div>
      </div>
      <div className={styles.users_list}>
        {users.map((user) => {
          return <FullUser userData={user} key={user.id} />
        })}
      </div>
    </div>
  )
}

export default PartnersLists
