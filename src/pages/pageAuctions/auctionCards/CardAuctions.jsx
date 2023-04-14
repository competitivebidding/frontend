import React from 'react'
import AuctionCard from './AuctionCard'
import './CardAuctions.scss'

const CardsAuctions = ({ data }) => {
  const auctionCards = data.map((card) => {
    const { id, ...cardProps } = card;
    return <AuctionCard key={id} {...cardProps} />
  })


  return (
    <div>
      <div className="title">Upcoming announcements </div>
      <div className="auctionList">{auctionCards}</div>
    </div>
  )
}

export default CardsAuctions
