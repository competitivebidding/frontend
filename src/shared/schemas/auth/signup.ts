import { gql } from '@apollo/client'

const SIGNUP_MUTATION = gql(`
  mutation Signup($signUpInput: SignUpInput!) {
    signup(signUpInput: $signUpInput) {
      user {
        username
        id
        email
      }
      refreshToken
      accessToken
    }
  }
`)

export default SIGNUP_MUTATION;
