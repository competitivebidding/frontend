import { gql } from '@shared/lib/types/__generated-types__/gql'


const SIGNIN_MUTATION = gql(`
mutation Signin($signInInput: SignInInput!) {
  signin(signInInput: $signInInput) {
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

export default SIGNIN_MUTATION;
