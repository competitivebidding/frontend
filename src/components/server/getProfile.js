import {gql} from "@apollo/client";

export const GET_PROFILE_QUERY = gql(`
    query GetProfile {
      getProfile {
        createdAt
        email
        firstname
        id
        instagram
        lastname
        patronymic
        username
      }
    }
`)
