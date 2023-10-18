import React from 'react'
import { useTranslation } from 'react-i18next'

import cls from './Mission.module.scss'

interface IMissionProps {
  value: string
}

export const Mission = ({ value }: IMissionProps) => {
  const { t } = useTranslation('mainPage')

  return (
    <div className={cls['main__mission']}>
      <div className={cls['mission__title']}>{t('Mission')}</div>
      <div className={cls['mission__subtitle']}>
        {value} {t('lucky people who won the auction')}
        <span>{value}</span>
      </div>
      <div className={cls['mission__progressBar']}>
        <span></span>
      </div>
    </div>
  )
}
