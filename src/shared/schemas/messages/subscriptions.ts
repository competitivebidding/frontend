import { gql } from '@shared/lib/types/__generated-types__/gql'

// export const NEW_MESSAGE = gql(`
//     mutation watchMessages($newMessage: NewMessageInput!) {
//       sendMessage(newMessage: $newMessage) {
//         id
//         userId
//         roomId
//         content
//         createdAt
//         updatedAt
//       }
//     }
// `)

export const NEW_MESSAGE = gql(`
  subscription NewMessage($roomId: Int!) {
    newMessage(roomId: $roomId) {
      content
      createdAt
      id
      updatedAt
      roomId
      userId
    }
  }
`)
