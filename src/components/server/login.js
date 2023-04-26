import { gql } from '@apollo/client';

const LOGIN_MUTATION = gql`
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
`;

export default LOGIN_MUTATION;
