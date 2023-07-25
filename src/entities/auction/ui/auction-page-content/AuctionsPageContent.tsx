import React from 'react'
import './AuctionsPageContent.scss'
// import AuctionSlider from "@/shared/ui/slider/AuctionSlider";
import { AuctionList } from '@entities/auction/ui/auctions-list/AuctionList'
import {useQuery} from "@apollo/client";
import {GET_AUCTIONS} from "@shared/schemas/auctions/auctions";
import {AuctionSlider} from "@shared/ui/slider/AuctionSlider";

interface IAuctionsPageContent {}

const AuctionsPageContent = () => {
    const {data} = useQuery(GET_AUCTIONS)
  return (
    <>
        {data && <>
            <div className="title">Upcoming announcements </div>
            <AuctionSlider data={data?.getAuctions.filter(card => card.status.name === 'New')}/>
            <div className="title">Announcement Auctions</div>
            <AuctionSlider data={data?.getAuctions.filter(card => card.status.name === 'Cancelled')}/>
            <div className="title">Active Auctions</div>
            <AuctionSlider data={data?.getAuctions.filter(card => card.status.name === 'Open')}/>
            <AuctionList />
        </>}
    </>
  )
}

export default AuctionsPageContent
