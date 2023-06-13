import { gql } from '@apollo/client';

export const GET_AUCTIONS = gql`
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

`