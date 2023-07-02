import React from 'react'
import Slider from '../../../../shared/ui/slider/Slider'
import AuctionList from '../auctions-list/AuctionList'
import './AuctionsPageContent.scss'
import AuctionSlider from "@/shared/ui/slider/AuctionSlider";

interface IAuctionsPageContent {

}

const AuctionsPageContent = ({ data }: IAuctionsPageContent) => {
    console.log(data)
  return (
    <div>
      {/* <div className="title">Upcoming announcements </div>
      <Slider data={data.filter(card => (card.status == 'wait'))}/> */}
      <div className='title'>Announcement Auctions</div>
        {/*<AuctionSlider data={data.filter(card => (card.status === 'wait'))}/>*/}
        {/*<AuctionSlider data={data}/>*/}
      <div className="title">Active Auctions</div>
      {/*<AuctionList data={data.filter(card => (card.status === 'Open'))} />*/}
        {data && <AuctionList data={data}/>}
    </div>
  )
}

export default AuctionsPageContent;
