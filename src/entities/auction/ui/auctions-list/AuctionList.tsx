import React from 'react'
import AuctionCard from '../auction-card/AuctionCard'
import '../auction-page-content/AuctionsPageContent.scss'

interface IAuctionList {
    data: any
}

const AuctionList = ({ data }: IAuctionList) => {
    if (!data || !Array.isArray(data)) {
        return null; // Return null or handle the error case appropriately
    }

    const auctionCards = data.map((card) => {
        const { id, ...cardProps } = card;
        return <AuctionCard key={id} {...cardProps} id={id} />
    })

    return (
        <div>
            <div className="auctionList">{auctionCards}</div>
        </div>
    )
}

export default AuctionList;
