import {graphql} from "../../types/gql";


const SIGNIN_MUTATION = graphql(`
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
