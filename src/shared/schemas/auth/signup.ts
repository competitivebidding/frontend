import {graphql} from "../../types/gql";

const SIGNUP_MUTATION = graphql(`
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
