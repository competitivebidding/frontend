import React from 'react'
import Slider from './Slider'
import AuctionList from './AuctionList'
import './CardAuctions.scss'
import AuctionSlider from "@/pages/pageAuctions/auctionCards/AuctionSlider";

const CardsAuctions = ({data}) => {
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

export default CardsAuctions
