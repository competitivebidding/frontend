import React from 'react'
import Slider from './Slider'
import AuctionList from './AuctionList'
import './CardAuctions.scss'

const CardsAuctions = ({data}) => {
  return (
    <div>
      {/* <div className="title">Upcoming announcements </div>
      <Slider data={data.filter(card => (card.status == 'wait'))}/> */}
      <div className='title'>Anouncment Auctions</div>
      <Slider data={data.filter(card => (card.status === 'wait'))} />
      <div className="title">Active Auctions</div>
      <AuctionList data={data.filter(card => (card.status === 'active'))} />
    </div>
  )
}

export default CardsAuctions
