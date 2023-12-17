import React from 'react'
import AuctionCard from '../auction-card/AuctionCard'
import '../auction-page-content/AuctionsPageContent.module.scss'
import { useQuery } from '@apollo/client'
import { GetAuctionsDocument } from '@shared/lib/types/__generated-types__/graphql'
import cls from './AuctionList.module.scss'

interface IAuctionCardProps {
  data: {
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

export const AuctionList = ({searchValue}: {searchValue: string}) => {
  const { data, loading } = useQuery(GetAuctionsDocument, {
    variables: {
      search: searchValue
    }
  })

  if (!data) {
    return null
  }

  const auctionCards = data.getAuctions.map((card) => {
    return (
      <AuctionCard
          key={card.id}
        id={card.id}
        title={card.title}
        bids={card.bids}
        startedAt={card.startedAt}
      />
    )
  })

  return (
    <div>
      <div className={cls.auctionList}>{auctionCards}</div>
    </div>
  )
}
