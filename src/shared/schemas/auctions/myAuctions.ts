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