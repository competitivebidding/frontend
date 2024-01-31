import { gql } from '@shared/lib/types/__generated-types__/gql'



export const NEW_MESSAGE = gql(`
  subscription NewMessage($roomId: Int!) {
  newMessage(roomId: $roomId) {
    id
    user {
      id
      username
      firstname
      lastname
      avatarUrl
      balance
    }
    room {
      id
      owner {
        id
        username
        firstname
        lastname
        avatarUrl
        balance
      }
      title
      description
      isPrivate
      createdAt
      updatedAt
    }
    content
    createdAt
    updatedAt
  }
}
`)
