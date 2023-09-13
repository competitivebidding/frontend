import React from 'react'

interface IAuctionItemCardProps {
  title: string
  image: string
}

const AuctionItemCard = ({ title, image }: IAuctionItemCardProps) => {
  return (
    <div className="item__card">
      <div className="item__card-title">{title}</div>
      <div className="item__card-image">
        <img src={image} alt="macbook" />
      </div>
    </div>
  )
}

export default AuctionItemCard
