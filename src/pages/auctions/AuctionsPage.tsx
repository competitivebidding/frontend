import React, {useEffect, useState} from 'react'
import AppHeader from '../../widgets/header/AppHeader.jsx'

import Filter from '../../feauters/filter/Filter.jsx'
import Search from '../../feauters/search/Search.js'

import './AuctionsPage.scss'
import {useQuery} from "@apollo/client";
import { GET_AUCTIONS } from "@/shared/schemas/auctions/auctions";
import AuctionsPageContent from "../../entities/auction/ui/auction-page-content/AuctionsPageContent";
import { GetAuctionQuery } from '../../shared/types/gql/graphql'

interface a {
  __typename?: 'Auction',
  id: number,
  title: string,
  description: string,
  sortOrder: number,
  finishedAt: any,
  startedAt: any,
  createdAt: any,
  updatedAt: any,
  creator: {
    __typename?: 'UserPublic',
    username: string,
    firstname?: string | null,
    lastname?: string | null,
    avatarUrl?: string | null
  }
}

interface b {
  title: string
}

interface C {
  __typename?: 'Query',
  getAuction: {
    __typename?: 'Auction',
    id: number,
    title: string,
    description: string,
    sortOrder: number,
    finishedAt: any,
    startedAt: any,
    createdAt: any,
    updatedAt: any,
    creator: {
      __typename?: 'UserPublic',
      username: string,
      firstname?: string | null,
      lastname?: string | null,
      avatarUrl?: string | null
    },
    winner?: {
      __typename?: 'UserPublic',
      username: string,
      firstname?: string | null,
      lastname?: string | null,
      avatarUrl?: string | null
    } | null,
    status: { __typename?: 'Status', id: number, name: string },
    bids?: Array<{
      __typename?: 'Bid',
      id: number,
      userId: number,
      auctionId: number,
      bitPrice: number,
      createdAt: any,
      updatedAt: any,
      user?: {
        __typename?: 'UserPublic',
        username: string,
        firstname?: string | null,
        lastname?: string | null,
        avatarUrl?: string | null
      } | null
    }> | null
  }
}

export const MyAuctionsPage = ({ title }: b) => {
  // эмитация данных с бэка


  const [auctData, setAuctData] = useState<a>()

  const {data, loading} = useQuery<C>(GET_AUCTIONS)
  console.log(auctData)

  useEffect(() => {
    if (!loading) {
      setAuctData(data?.getAuction)
    }
  }, [data]);

  return (
    <>
      <AppHeader title={title} />

      <div className='auctions__components'>
        <div className='auctions__search--card'>
          <Search />

          {<AuctionsPageContent data={auctData}/>}
        </div>
        <Filter />
      </div>
    </>
  )
}

export default MyAuctionsPage
