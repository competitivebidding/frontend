import {gql} from "@apollo/client";

export const UPDATE_PROFILE = gql`
mutation EditProfile($updateUserInput: UpdateUserInput!) {
    editProfile(updateUserInput: $updateUserInput) {
        id
        username
        email
        firstname
        lastname
        patronymic
        instagram
        createdAt
        updatedAt
        }
    }
`