import { gql } from '@shared/lib/types/__generated-types__/gql'

export const GET_LOT = gql(`
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
