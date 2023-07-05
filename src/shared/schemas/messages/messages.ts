import { gql } from '@shared/lib/types/__generated-types__/gql'

export const GET_ALL_MY_ROOMS = gql(`
    query GetAllMyRooms {
      getAllMyRooms {
        id
        ownerId
        title
        description
        createdAt
        updatedAt
      }
    }
`)

export const GET_ALL_MESSAGES_BY_ROOM = gql(`
query GetAllMessagesByRoomId($userMessage: UserMessages!) {
  getAllMessagesByRoomId(userMessage: $userMessage) {
    content
    createdAt
    id
    roomId
    updatedAt
    userId
  }
}
`)
export const GET_ALL_USERS_BY_ROOM_ID = gql(`
    query GetAllUsersByRoomId($roomId: Float!) {
      getAllUsersByRoomId(roomId: $roomId) {
        username
        firstname
        lastname
        avatarUrl
      }
    }
`)
export const SEND_MESSAGE = gql(`
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
export const CREATE_MY_ROOM = gql(`
    mutation CreateMyRoom($input: RoomCreateInput!) {
      createMyRoom(input: $input) {
        id
        ownerId
        title
        description
        createdAt
        updatedAt
      }
    }

`)
export const JOIN_ROOM = gql(`
    mutation JoinToRoom($roomId: Float!) {
  joinToRoom(roomId: $roomId) {
    username
    firstname
    lastname
    avatarUrl
  }
}
`)
export const LEAVE_FROM_CHAT = gql(`
mutation LeaveFromRoom($roomId: Float!) {
  leaveFromRoom(roomId: $roomId) {
    avatarUrl
    lastname
    firstname
    username
  }
}
`)

