import React from 'react'
import AuctionCard from './AuctionCard'
import './CardAuctions.scss'

const CardsAuctions = ({ data, all, cardStatus, changeStatus }) => {
  const auctionCards = data.map((item) => {
    const { id, status, ...itemProps } = item
    if (all) {
      return (
        <AuctionCard key={id} id={id} changeStatus={changeStatus} {...itemProps} />)
    } else if (cardStatus == 'active') {
      if (status == 'active') {
        return <AuctionCard key={id} {...itemProps} />
      }
    } else if (cardStatus == 'wait') {
      if (status == 'wait') {
        return <AuctionCard key={id} {...itemProps} />
      }
    } else if (cardStatus == 'end') {
      if (status == 'end') {
        return <AuctionCard key={id} {...itemProps} />
      }
    }
  })

  return (
    <div>
      <div className="title">Upcoming announcements </div>

      <div className="auctionList">{auctionCards}</div>
    </div>
  )
}

export default CardsAuctions
