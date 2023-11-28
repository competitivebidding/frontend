import { gql } from '@shared/lib/types/__generated-types__/gql'

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

export const PAY_OPERATION = gql(`
mutation PayOperation($createPayInput: CreatePayInput!) {
  payOperation(createPayInput: $createPayInput) {
    id
    user_id
    operation
    typeOperation
    amount
    message
    createAt
  }
}`)