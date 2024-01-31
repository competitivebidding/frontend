import { gql } from '@shared/lib/types/__generated-types__/gql'

export const GET_AUCTIONS = gql(`query GetAuctions($search: String, $sortBy: String, $sortOrder: String, $skip: Int, $take: Int) {
  getAuctions(search: $search, sortBy: $sortBy, sortOrder: $sortOrder, skip: $skip, take: $take) {
    id
    title
    description
    startingPrice
    creator {
      id
      username
      firstname
      lastname
      avatarUrl
      balance
    }
    winner {
      id
      username
      firstname
      lastname
      avatarUrl
      balance
    }
    status {
      id
      name
    }
    sortOrder
    finishedAt
    startedAt
    createdAt
    updatedAt
    bids {
      id
      userId
      auctionId
      bitPrice
      createdAt
      updatedAt
      user {
        id
        username
        firstname
        lastname
        avatarUrl
        balance
      }
    }
  }
}
`)

export const CREATE_MY_BID = gql(`
    mutation CreateMyBid($input: CreateBidInput!) {
      createMyBid(input: $input) {
        id
        userId
        auctionId
        bitPrice
        createdAt
        updatedAt
        user {
          username
          firstname
          lastname
          avatarUrl
        }
      }
    }
`)

export const GET_BIDS_BY_AUCTION_ID = gql(`
    query GetBidsByAuctionId($auctionId: Int!) {
      getBidsByAuctionId(auctionId: $auctionId) {
        id
        userId
        auctionId
        bitPrice
        createdAt
        updatedAt
        user {
          username
          firstname
          lastname
          avatarUrl
        }
      }
    }
`)
