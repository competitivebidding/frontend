import React from 'react'
import auction from '@assets/pageMain/royalAuction.png'
import cls from './RoyalAuction.module.scss'
import { useTranslation } from 'react-i18next'

 export const RoyalAuction = () => {
  const { t } = useTranslation('mainPage')

  return (
    <div className={cls.main__royalAction}>
      <div className={cls.royalAction__title}>{t('Royal Auction')}</div>
      <div className={cls.royalAction__text}>
        {t('This is an international online auction that offers the opportunity to bid for the right to purchase goods, services, crypto-assets, cars, real estate and other things, for 15-20% of their market value')}
      </div>
      <div className={cls.royalAction__crown}>
        <img src={auction} alt={'Auction'}/>
      </div>
    </div>
  )
}

