import {graphql} from "../../types/gql";

const LOGOUT_MUTATION = graphql(`
mutation Logout($logoutId: Int!) {
  logout(id: $logoutId) {
    loggedOut
  }
}`
)

export default LOGOUT_MUTATION;
