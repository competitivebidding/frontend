import { gql } from '@apollo/client'

// export interface Referals {
//   id: number
//   cuid: string
//   email: string
//   username: string
//   createdAt: string
// }

export const GET_MY_REFERRALS = gql(`
    query GetMyReferrals {
      getMyReferrals {
        id
        cuid
        email
        username
        createdAt
      }
    }
`)
