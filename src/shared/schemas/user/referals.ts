import {graphql} from "../../types/gql";

export const GET_MY_REFERRALS = graphql(`
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