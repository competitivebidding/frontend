import React from 'react'
import { useTranslation } from 'react-i18next'
import cls from './UserInfoButtons.module.scss'

const UserInfoButtons = () => {
  const { t } = useTranslation('partnerPage')

  return (
    <div className={cls.buttons__block}>
      <a href="#" className={`${cls.buttons__button} ${cls.blue}`}>
        {t('Partner program')}
      </a>
      <a href="#" className={`${cls.buttons__button} ${cls.gray}`}>
        {t('About program')}
      </a>
    </div>
  )
}

export default UserInfoButtons
