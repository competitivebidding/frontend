import React from 'react'
import AuctionCard from './AuctionCard'
import './CardAuctions.scss'


const AuctionList = ({ data }) => {
    if (!data || !Array.isArray(data)) {
        return null; // Return null or handle the error case appropriately
    }
    console.log(data)
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