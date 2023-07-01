import {graphql} from "../../types/gql";

export const NEW_MESSAGE = graphql(`
    mutation Mutation($newMessage: NewMessageInput!) {
      sendMessage(newMessage: $newMessage) {
        id
        userId
        roomId
        content
        createdAt
        updatedAt
      }
    }
`)