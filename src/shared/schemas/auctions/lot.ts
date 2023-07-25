import { gql } from '@shared/lib/types/__generated-types__/gql'

export const GET_LOT = gql(`
    query GetAuction($auctionId: Int!) {
  getAuction(auctionId: $auctionId) {
    id
    title
    description
    startingPrice
    creator {
      username
      firstname
      lastname
      avatarUrl
    }
    winner {
      username
      firstname
      lastname
      avatarUrl
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
        username
        firstname
        lastname
        avatarUrl
      }
    }
  }
}`)
