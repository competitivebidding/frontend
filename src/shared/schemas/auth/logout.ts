import { gql } from '@shared/lib/types/__generated-types__/gql'

const LOGOUT_MUTATION = gql(`
mutation Logout($logoutId: Int!) {
  logout(id: $logoutId) {
    loggedOut
  }
}`
)

export default LOGOUT_MUTATION;
