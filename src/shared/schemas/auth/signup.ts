import { gql } from '@shared/lib/types/__generated-types__/gql'

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
