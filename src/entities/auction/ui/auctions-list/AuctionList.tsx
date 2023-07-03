import React from 'react'
import AuctionCard from '../auction-card/AuctionCard'
import '../auction-page-content/AuctionsPageContent.scss'
import {useQuery} from "@apollo/client";
import {GetAuctionsDocument} from "@shared/lib/types/__generated-types__/graphql";

interface IAuctionCardProps {
    data:
    {
        id: string
        alt: string
        title: string
        date: string
        bids: string
        places: string
        changeStatus: boolean
        startedAt: Date
        className?: string
    }
}

export const AuctionList = () => {
    const { data, loading } = useQuery(GetAuctionsDocument)

    if (!data || !Array.isArray(data)) {
        return null; // Return null or handle the error case appropriately
    }

    const auctionCards = data.map((card) => {
        // const { id, ...cardProps } = card;
        return (
            <AuctionCard
                id={card.id} 
                alt={card.alt} 
                title={card.title}
                date={card.date} 
                bids={card.bids} 
                places={card.places} 
                changeStatus={card.changeStatus} 
                startedAt={card.startedAt} 
                />
            )
    })

    return (
        <div>
            <div className="auctionList">{auctionCards}</div>
        </div>
    )
}

