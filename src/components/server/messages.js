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