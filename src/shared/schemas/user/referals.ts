import { gql } from '@shared/lib/types/__generated-types__/gql'

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
