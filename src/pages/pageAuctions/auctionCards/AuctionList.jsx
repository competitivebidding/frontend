import React from 'react'
import AuctionCard from './AuctionCard'
import './CardAuctions.scss'

const AuctionList = ({ data }) => {
    const auctionCards = data.map((card) => {
        const { id, ...cardProps } = card;
        return <AuctionCard key={id} {...cardProps} />
    })

    return (
        <div>
            <div className="auctionList">{auctionCards}</div>
        </div>
    )
}

export default AuctionList;