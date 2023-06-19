import {gql} from "@apollo/client";

export const NEW_MESSAGE = gql`
    subscription Subscription($room: Int!) {
      newMessage(room: $room) {
        id
        userId
        roomId
        content
        createdAt
        updatedAt
      }
    }
`