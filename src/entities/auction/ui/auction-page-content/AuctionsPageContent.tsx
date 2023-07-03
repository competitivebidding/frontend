import React from 'react'
// import Slider from '../../../../shared/ui/slider/Slider'
import './AuctionsPageContent.scss'
// import AuctionSlider from "@/shared/ui/slider/AuctionSlider";
import {AuctionList} from "@entities/auction/ui/auctions-list/AuctionList";

interface IAuctionsPageContent {

}

const AuctionsPageContent = () => {

  return (
    <div>
      {/* <div className="title">Upcoming announcements </div>
      <Slider data={data.filter(card => (card.status == 'wait'))}/> */}
      <div className='title'>Announcement Auctions</div>
        {/*<AuctionSlider data={data.filter(card => (card.status === 'wait'))}/>*/}
        {/*<AuctionSlider data={data}/>*/}
      <div className="title">Active Auctions</div>
      {/*<AuctionList data={data.filter(card => (card.status === 'Open'))} />*/}
        <AuctionList />
    </div>
  )
}

export default AuctionsPageContent;
