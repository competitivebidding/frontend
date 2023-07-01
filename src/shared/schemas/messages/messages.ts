import {graphql} from "../../types/gql";

export const GET_ALL_MY_ROOMS = graphql(`
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
export const GET_ALL_MESSAGES_BY_ROOM = graphql(`
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
export const GET_ALL_USERS_BY_ROOM_ID = graphql(`
    query GetAllUsersByRoomId($roomId: Float!) {
      getAllUsersByRoomId(roomId: $roomId) {
        username
        firstname
        lastname
        avatarUrl
      }
    }
`)
export const SEND_MESSAGE = graphql(`
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
export const CREATE_MY_ROOM = graphql(`
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
export const JOIN_ROOM = graphql(`
    mutation JoinToRoom($roomId: Float!) {
  joinToRoom(roomId: $roomId) {
    username
    firstname
    lastname
    avatarUrl
  }
}
`)
export const LEAVE_FROM_CHAT = graphql(`
mutation LeaveFromRoom($roomId: Float!) {
  leaveFromRoom(roomId: $roomId) {
    avatarUrl
    lastname
    firstname
    username
  }
}
`)

