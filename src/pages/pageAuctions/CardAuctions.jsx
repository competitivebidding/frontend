import React from 'react';
import AuctionCard from './AuctionCard';
import './CardAuctions.scss'

const CardsAuctions = ({ data }) => {

  const auctionCards = data.map(item => {
    const { id, ...itemProps } = item;
    return (
      <AuctionCard key={id} {...itemProps} />
    )
  });

  return (
    <div className='auctionList'>
      {auctionCards}
    </div>
  );
}

export default CardsAuctions;
