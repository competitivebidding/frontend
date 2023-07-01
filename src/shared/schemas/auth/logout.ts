import { gql } from '@apollo/client'

const LOGOUT_MUTATION = gql(`
mutation Logout($logoutId: Int!) {
  logout(id: $logoutId) {
    loggedOut
  }
}`
)

export default LOGOUT_MUTATION;
