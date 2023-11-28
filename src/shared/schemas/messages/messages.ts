import { gql } from '@shared/lib/types/__generated-types__/gql'

export const GET_ALL_MY_ROOMS = gql(`
    query GetAllMyRooms {
  getAllMyRooms {
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
    messages {
      content
    }
  }
}
`)

export const GET_ALL_MESSAGES_BY_ROOM = gql(`
query Items($input: UserMessages!) {
  getAllMessagesByRoomId(input: $input) {
    items {
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
    totalCount
  }
}
`);



export const GET_ALL_USERS_BY_ROOM_ID = gql(`
    query GetAllUsersByRoomId($roomId: Float!) {
  getAllUsersByRoomId(roomId: $roomId) {
    id
    username
    firstname
    lastname
    avatarUrl
    balance
  }
}
`)
export const SEND_MESSAGE = gql(`
    mutation SendMessage($newMessage: NewMessageInput!) {
  sendMessage(newMessage: $newMessage) {
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
export const CREATE_MY_ROOM = gql(`
    


mutation CreateMyRoom($input: RoomCreateInput!) {
  createMyRoom(input: $input) {
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
}

`)

export const REMOVE_MESSAGE = gql(`
    mutation RemoveMessage($removeMessageId: Float!) {
  removeMessage(id: $removeMessageId) {
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

export const UPDATE_MESSAGE = gql(`
   mutation UpdateMessage($input: MessageUpdateInput!) {
  updateMessage(input: $input) {
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

export const GET_ROOM_BY_ID = gql(`
 query GetRoomById($roomId: Float!) {
  getRoomById(roomId: $roomId) {
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

export const ADD_USER_IN_ROOM = gql(`
mutation AddUserInRoom($addUser: AddUserInput!) {
  addUserInRoom(addUser: $addUser) {
    username
    firstname
    lastname
    avatarUrl
  }
}`)

export const REMOVE_MY_ROOM = gql(`
mutation RemoveMyRoom($roomId: Float!) {
  removeMyRoom(roomId: $roomId) {
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
}`)