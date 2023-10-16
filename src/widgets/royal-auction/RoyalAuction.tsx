import React from 'react'
import auction from '@assets/pageMain/royalAuction.png'
import cls from './RoyalAuction.module.scss'

export const RoyalAuction = () => {
  return (
    <div className={cls.main__royalAction}>
      <div className={cls.royalAction__title}>Royal Auction</div>
      <div className={cls.royalAction__text}>
        This is an international online auction that offers the opportunity to bid for the right to purchase goods,
        services, crypto-assets, cars, real estate and other things, for 15-20% of their market value
      </div>
      <div className={cls.royalAction__crown}>
        <img src={auction} alt={'Auction'}/>
      </div>
    </div>
  )
}
