import { gql } from '@shared/lib/types/__generated-types__/gql'



export const Create__MyAuction = gql(`
mutation CreateMyAuction($input: CreateAuctionInput!) {
  createMyAuction(input: $input) {
    id
    title
    startingPrice
    description
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
      bitPrice
      createdAt
      auctionId
      updatedAt
      user {
        username
        firstname
        lastname
        avatarUrl
      }
    }
  }
} `)

export const GET_MY_WON_AUCTIONS = gql(`
    query GetMyWonAuctions {
  getMyWonAuctions {
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