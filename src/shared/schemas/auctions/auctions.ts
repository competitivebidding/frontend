import {graphql} from "../../types/gql";

export const GET_AUCTIONS = graphql(`
    query ExampleQuery {
    getAuctions {
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
        createdAt
        creator {
            username
            firstname
            lastname
            avatarUrl
        }
        description
        finishedAt
        id
        sortOrder
        startedAt
        status {
            id
            name
        }
        title
        updatedAt
        winner {
            username
            firstname
            lastname
            avatarUrl
        }
    }
}
`)

export const CREATE_MY_BID = graphql(`
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

export const GET_BIDS_BY_AUCTION_ID = graphql(`
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
