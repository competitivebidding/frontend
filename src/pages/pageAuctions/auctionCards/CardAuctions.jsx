import React from 'react'
// import AuctionCard from './AuctionCard'
import Slider from './Slider'
import AuctionList from './AuctionList'
import './CardAuctions.scss'

const CardsAuctions = ({data}) => {
  // const auctionCards = data.map((card) => {
  //   const { id, ...cardProps } = card;
  //   return <AuctionCard key={id} {...cardProps} />
  // })


  return (
    <div>
      <div className='title'>Upcoming announcements</div>
      <Slider data={data.filter(card => (card.status == 'wait'))}/>
      <div className="title">Active Auctions</div>
      <AuctionList data={data.filter(card => (card.status == 'active'))} />
    </div>
  )
}

export default CardsAuctions
