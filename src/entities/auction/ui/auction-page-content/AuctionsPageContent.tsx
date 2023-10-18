import React from 'react'
import cls from './AuctionsPageContent.module.scss'
// import AuctionSlider from "@/shared/ui/slider/AuctionSlider";
import {AuctionList} from '@entities/auction/ui/auctions-list/AuctionList'
import {useQuery} from "@apollo/client";
import {GET_AUCTIONS} from "@shared/schemas/auctions/auctions";
import {AuctionSlider} from "@shared/ui/slider/AuctionSlider";
import { useTranslation } from 'react-i18next'

interface IAuctionsPageContent {}

const AuctionsPageContent = () => {
    const {data} = useQuery(GET_AUCTIONS)
    const { t } = useTranslation('auctionsPage')

  return (
    <>
        {data && <>
            <div className={cls.title}>{t('Upcoming announcements')} </div>
            <AuctionSlider data={data?.getAuctions.filter(card => card.status.name === 'New')}/>
            {/* <div className={cls.title}>{t('Announcement Auctions')}</div>
            <AuctionSlider data={data?.getAuctions.filter(card => card.status.name === 'Cancelled')}/> */}
            <div className={cls.title}>{t('Active Auctions')}</div>
            {/* <AuctionSlider data={data?.getAuctions.filter(card => card.status.name === 'Open')}/> */}
            <AuctionList />
        </>}
    </>
  )
}

export default AuctionsPageContent
