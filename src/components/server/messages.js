import {gql} from "@apollo/client";

export const CREATE_MY_ROOM = gql`
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
`

export const GET_ALL_MY_ROOMS = gql`
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
`

export const GET_ALL_MESSAGES_BY_ROOM = gql`
    query Query($input: UserMessages!) {
      getAllMessagesByRoomId(input: $input) {
        id
        userId
        roomId
        content
        createdAt
        updatedAt
      }
    }
`

export const SEND_MESSAGE = gql`
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
`

export const JOIN_ROOM = gql`
    mutation JoinToRoom($roomId: Float!) {
  joinToRoom(roomId: $roomId) {
    username
    firstname
    lastname
    avatarUrl
  }
}
`

export const GET_ALL_ROOMS = gql`
query GetAllRooms {
  getAllRooms {
    id
    ownerId
    title
    description
    createdAt
    updatedAt
  }
}
`

export const GET_ALL_USERS_BY_ROOM_ID = gql`
    query GetAllUsersByRoomId($roomId: Float!) {
      getAllUsersByRoomId(roomId: $roomId) {
        username
        firstname
        lastname
        avatarUrl
      }
    }
`