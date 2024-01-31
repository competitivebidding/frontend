import {gql} from '@shared/lib/types/__generated-types__/gql'

export const GET_PROFILE_QUERY = gql(`
  query GetProfile {
  getProfile {
    id
    username
    email
    firstname
    phone
    lastname
    patronymic
    instagram
    confirmationCode
    avatarUrl
    balance
    createdAt
    updatedAt
  }
}
`)

export const GET_USER_ADDRESS = gql(`
  query GetUserAddress {
    getUserAddress {
      country
      city
      address
      index
      createdAt
      updatedAt
    }
  }
`)

export const GET_USER_PAYMENT = gql(`
    query GetUserPayment {
        getUserPayment {
        firstname
        lastname
        patronymic
        number
        cvv
        month
        year
        createdAt
        updatedAt
        }
    }
`)

export const UPDATE_USER_ADDRESS = gql(`
  mutation UpdateUserAddress($input: UpdateAddressInput!) {
    updateUserAddress(input: $input) {
      country
      city
      address
      index
      createdAt
      updatedAt
    }
  }
`)

export const UPDATE_PROFILE = gql(`
  mutation EditProfile($updateUserInput: UpdateUserInput!) {
    editProfile(updateUserInput: $updateUserInput) {
      id
      username
      email
      firstname
      phone
      lastname
      patronymic
      instagram
      createdAt
      updatedAt
    }
  }
`)

export const UPDATE_USER_PAYMENT = gql(`
  mutation UpdateUserPayment($input: UpdatePaymentInput!) {
    updateUserPayment(input: $input) {
      firstname
      lastname
      patronymic
      number
      cvv
      month
      year
      createdAt
      updatedAt
    }
  }
`)
