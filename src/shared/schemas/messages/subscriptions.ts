import { gql } from '@apollo/client'

export const NEW_MESSAGE = gql(`
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
