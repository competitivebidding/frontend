import React from 'react'
import cls from './AuctionsPageContent.module.scss'
// import AuctionSlider from "@/shared/ui/slider/AuctionSlider";
import {AuctionList} from '@entities/auction/ui/auctions-list/AuctionList'
import {useQuery} from "@apollo/client";
import {GET_AUCTIONS} from "@shared/schemas/auctions/auctions";
import {AuctionSlider} from "@shared/ui/slider/AuctionSlider";
import { useTranslation } from 'react-i18next'

interface IAuctionsPageContent {
    
    searchValue: string
}

export const AuctionsPageContent = ({searchValue}: IAuctionsPageContent) => {
    const {data} = useQuery(GET_AUCTIONS, {
        variables: {
            search: searchValue
        }
    })
    const { t } = useTranslation('auctionsPage')

    if (data && data.getAuctions) {
        data.getAuctions.forEach(auction => {
          console.log(auction.status);
        });
      }
      

      const openAuctions = data?.getAuctions.filter(auction => auction.status.name !== 'Open');

  return (
    <>
        {data && <>
            <div className={cls.title}>{t('Upcoming announcements')} </div>
            <AuctionSlider data={data?.getAuctions.filter(card => card.status.name === 'New')}/>
            {/* <div className={cls.title}>{t('Announcement Auctions')}</div>
            <AuctionSlider data={data?.getAuctions.filter(card => card.status.name === 'Cancelled')}/> */}
            <div className={cls.title}>{t('Active Auctions')}</div>
            {/* <AuctionSlider data={data?.getAuctions.filter(card => card.status.name === 'Open')}/> */}
            <AuctionList dataFilter={openAuctions || []} searchValue={searchValue} />
        </>}
    </>
  )
}

