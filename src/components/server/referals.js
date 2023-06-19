import {gql} from "@apollo/client";

export const GET_MY_REFERRALS = gql`
    query GetMyReferrals {
      getMyReferrals {
        id
        cuid
        email
        username
        createdAt
      }
    }
`