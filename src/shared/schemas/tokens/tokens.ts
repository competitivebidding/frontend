import { gql } from '@apollo/client'

export const CREATE_TOKEN = gql(`
mutation CreateToken($data: CreateTokenInput!) {
  createToken(data: $data) {
    updatedAt
    title
    sortOrder
    points
    price
    id
    description
    createdAt
  }
}
`)

export const GET_TOKEN_BY_ID = gql(`
mutation GetTokenById($getTokenByIdId: Int!) {
  getTokenById(id: $getTokenByIdId) {
    createdAt
    description
    points
    id
    price
    updatedAt
    title
    sortOrder
  }
}
`);


export const UPDATE_TOKEN = gql(`
mutation UpdateToken($updateTokenId: Int!, $data: UpdateTokenInput!) {
  updateToken(id: $updateTokenId, data: $data) {
    createdAt
    description
    id
    points
    price
    sortOrder
    title
    updatedAt
  }
}
`)
