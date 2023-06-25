import {gql} from "@apollo/client";

export const NEW_MESSAGE = gql`
    subscription Subscription($roomId: Int!) {
      newMessage(roomId: $roomId) {
        id
        userId
        roomId
        content
        createdAt
        updatedAt
      }
    }
`