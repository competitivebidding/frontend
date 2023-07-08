/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query GetAuctions {\n    getAuctions {\n        bids {\n            id\n            userId\n            auctionId\n            bitPrice\n            createdAt\n            updatedAt\n            user {\n                username\n                firstname\n                lastname\n                avatarUrl\n            }\n        }\n        createdAt\n        creator {\n            username\n            firstname\n            lastname\n            avatarUrl\n        }\n        description\n        finishedAt\n        id\n        sortOrder\n        startedAt\n        status {\n            id\n            name\n        }\n        title\n        updatedAt\n        winner {\n            username\n            firstname\n            lastname\n            avatarUrl\n        }\n    }\n}\n": types.GetAuctionsDocument,
    "\n    mutation CreateMyBid($input: CreateBidInput!) {\n      createMyBid(input: $input) {\n        id\n        userId\n        auctionId\n        bitPrice\n        createdAt\n        updatedAt\n        user {\n          username\n          firstname\n          lastname\n          avatarUrl\n        }\n      }\n    }\n": types.CreateMyBidDocument,
    "\n    query GetBidsByAuctionId($auctionId: Int!) {\n      getBidsByAuctionId(auctionId: $auctionId) {\n        id\n        userId\n        auctionId\n        bitPrice\n        createdAt\n        updatedAt\n        user {\n          username\n          firstname\n          lastname\n          avatarUrl\n        }\n      }\n    }\n": types.GetBidsByAuctionIdDocument,
    "\n    query ExampleQuery {\n    getAuctions {\n        bids {\n            id\n            userId\n            auctionId\n            bitPrice\n            createdAt\n            updatedAt\n            user {\n                username\n                firstname\n                lastname\n                avatarUrl\n            }\n        }\n        createdAt\n        creator {\n            username\n            firstname\n            lastname\n            avatarUrl\n        }\n        description\n        finishedAt\n        id\n        sortOrder\n        startedAt\n        status {\n            id\n            name\n        }\n        title\n        updatedAt\n        winner {\n            username\n            firstname\n            lastname\n            avatarUrl\n        }\n    }\n}\n": types.ExampleQueryDocument,
    "\nmutation Logout($logoutId: Int!) {\n  logout(id: $logoutId) {\n    loggedOut\n  }\n}": types.LogoutDocument,
    "\nmutation Signin($signInInput: SignInInput!) {\n  signin(signInInput: $signInInput) {\n    user {\n      username\n      id\n      email\n    }\n    refreshToken\n    accessToken\n  }\n}\n": types.SigninDocument,
    "\n  mutation Signup($signUpInput: SignUpInput!) {\n    signup(signUpInput: $signUpInput) {\n      user {\n        username\n        id\n        email\n      }\n      refreshToken\n      accessToken\n    }\n  }\n": types.SignupDocument,
    "\n    query GetAllMyRooms {\n      getAllMyRooms {\n        id\n        ownerId\n        title\n        description\n        createdAt\n        updatedAt\n      }\n    }\n": types.GetAllMyRoomsDocument,
    "\n  query GetAllRooms {\n    getAllRooms {\n      id\n      ownerId\n      title\n      description\n      createdAt\n      updatedAt\n    }\n  }\n": types.GetAllRoomsDocument,
    "\nquery GetAllMessagesByRoomId($userMessage: UserMessages!) {\n  getAllMessagesByRoomId(userMessage: $userMessage) {\n    content\n    createdAt\n    id\n    roomId\n    updatedAt\n    userId\n  }\n}\n": types.GetAllMessagesByRoomIdDocument,
    "\n    query GetAllUsersByRoomId($roomId: Float!) {\n      getAllUsersByRoomId(roomId: $roomId) {\n        username\n        firstname\n        lastname\n        avatarUrl\n      }\n    }\n": types.GetAllUsersByRoomIdDocument,
    "\n    mutation Mutation($newMessage: NewMessageInput!) {\n      sendMessage(newMessage: $newMessage) {\n        id\n        userId\n        roomId\n        content\n        createdAt\n        updatedAt\n      }\n    }\n": types.MutationDocument,
    "\n    mutation CreateMyRoom($input: RoomCreateInput!) {\n      createMyRoom(input: $input) {\n        id\n        ownerId\n        title\n        description\n        createdAt\n        updatedAt\n      }\n    }\n\n": types.CreateMyRoomDocument,
    "\n  query GetRoomById($roomId: Float!) {\n    getRoomById(roomId: $roomId) {\n      ownerId\n    }\n  }\n": types.GetRoomByIdDocument,
    "\n    mutation JoinToRoom($roomId: Float!) {\n  joinToRoom(roomId: $roomId) {\n    username\n    firstname\n    lastname\n    avatarUrl\n  }\n}\n": types.JoinToRoomDocument,
    "\nmutation LeaveFromRoom($roomId: Float!) {\n  leaveFromRoom(roomId: $roomId) {\n    avatarUrl\n    lastname\n    firstname\n    username\n  }\n}\n": types.LeaveFromRoomDocument,
    "\n  subscription NewMessage($roomId: Int!) {\n    newMessage(roomId: $roomId) {\n      content\n      createdAt\n      id\n      updatedAt\n      roomId\n      userId\n    }\n  }\n": types.NewMessageDocument,
    "\n\tquery GetAllNews($sortBy: String, $sortOrder: String, $skip: Int, $take: Int, $search: String) {\n\t\tnews: getAllNews(sortBy: $sortBy, sortOrder: $sortOrder, skip: $skip, take: $take, search: $search) {\n\t\t  totalCount\n\t\t  items {\n\t\t\tid\n\t\t\ttitle\n\t\t\ttext: description\n\t\t\tupdatedAt\n\t\t\tdate: createdAt\n\t\t\timages: imageUrl\n\t\t\tuserId\n\t\t}\n\t }\n  } \n": types.GetAllNewsDocument,
    "\nmutation CreateToken($data: CreateTokenInput!) {\n  createToken(data: $data) {\n    updatedAt\n    title\n    sortOrder\n    points\n    price\n    id\n    description\n    createdAt\n  }\n}\n": types.CreateTokenDocument,
    "\nmutation GetTokenById($getTokenByIdId: Int!) {\n  getTokenById(id: $getTokenByIdId) {\n    createdAt\n    description\n    points\n    id\n    price\n    updatedAt\n    title\n    sortOrder\n  }\n}\n": types.GetTokenByIdDocument,
    "\nmutation UpdateToken($updateTokenId: Int!, $data: UpdateTokenInput!) {\n  updateToken(id: $updateTokenId, data: $data) {\n    createdAt\n    description\n    id\n    points\n    price\n    sortOrder\n    title\n    updatedAt\n  }\n}\n": types.UpdateTokenDocument,
    "\n    query GetMyReferrals {\n      getMyReferrals {\n        id\n        cuid\n        email\n        username\n        createdAt\n      }\n    }\n": types.GetMyReferralsDocument,
    "\n  query GetProfile {\n    getProfile {\n      id\n      username\n      email\n      firstname\n      phone\n      lastname\n      patronymic\n      instagram\n      confirmationCode\n      avatarUrl\n      createdAt\n      updatedAt\n    }\n  }\n": types.GetProfileDocument,
    "\n  query GetUserAddress {\n    getUserAddress {\n      country\n      city\n      address\n      index\n      createdAt\n      updatedAt\n    }\n  }\n": types.GetUserAddressDocument,
    "\n    query GetUserPayment {\n        getUserPayment {\n        firstname\n        lastname\n        patronymic\n        number\n        cvv\n        month\n        year\n        createdAt\n        updatedAt\n        }\n    }\n": types.GetUserPaymentDocument,
    "\n  mutation UpdateUserAddress($input: UpdateAddressInput!) {\n    updateUserAddress(input: $input) {\n      country\n      city\n      address\n      index\n      createdAt\n      updatedAt\n    }\n  }\n": types.UpdateUserAddressDocument,
    "\n  mutation EditProfile($updateUserInput: UpdateUserInput!) {\n    editProfile(updateUserInput: $updateUserInput) {\n      id\n      username\n      email\n      firstname\n      phone\n      lastname\n      patronymic\n      instagram\n      createdAt\n      updatedAt\n    }\n  }\n": types.EditProfileDocument,
    "\n  mutation UpdateUserPayment($input: UpdatePaymentInput!) {\n    updateUserPayment(input: $input) {\n      firstname\n      lastname\n      patronymic\n      number\n      cvv\n      month\n      year\n      createdAt\n      updatedAt\n    }\n  }\n": types.UpdateUserPaymentDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetAuctions {\n    getAuctions {\n        bids {\n            id\n            userId\n            auctionId\n            bitPrice\n            createdAt\n            updatedAt\n            user {\n                username\n                firstname\n                lastname\n                avatarUrl\n            }\n        }\n        createdAt\n        creator {\n            username\n            firstname\n            lastname\n            avatarUrl\n        }\n        description\n        finishedAt\n        id\n        sortOrder\n        startedAt\n        status {\n            id\n            name\n        }\n        title\n        updatedAt\n        winner {\n            username\n            firstname\n            lastname\n            avatarUrl\n        }\n    }\n}\n"): (typeof documents)["\n    query GetAuctions {\n    getAuctions {\n        bids {\n            id\n            userId\n            auctionId\n            bitPrice\n            createdAt\n            updatedAt\n            user {\n                username\n                firstname\n                lastname\n                avatarUrl\n            }\n        }\n        createdAt\n        creator {\n            username\n            firstname\n            lastname\n            avatarUrl\n        }\n        description\n        finishedAt\n        id\n        sortOrder\n        startedAt\n        status {\n            id\n            name\n        }\n        title\n        updatedAt\n        winner {\n            username\n            firstname\n            lastname\n            avatarUrl\n        }\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateMyBid($input: CreateBidInput!) {\n      createMyBid(input: $input) {\n        id\n        userId\n        auctionId\n        bitPrice\n        createdAt\n        updatedAt\n        user {\n          username\n          firstname\n          lastname\n          avatarUrl\n        }\n      }\n    }\n"): (typeof documents)["\n    mutation CreateMyBid($input: CreateBidInput!) {\n      createMyBid(input: $input) {\n        id\n        userId\n        auctionId\n        bitPrice\n        createdAt\n        updatedAt\n        user {\n          username\n          firstname\n          lastname\n          avatarUrl\n        }\n      }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetBidsByAuctionId($auctionId: Int!) {\n      getBidsByAuctionId(auctionId: $auctionId) {\n        id\n        userId\n        auctionId\n        bitPrice\n        createdAt\n        updatedAt\n        user {\n          username\n          firstname\n          lastname\n          avatarUrl\n        }\n      }\n    }\n"): (typeof documents)["\n    query GetBidsByAuctionId($auctionId: Int!) {\n      getBidsByAuctionId(auctionId: $auctionId) {\n        id\n        userId\n        auctionId\n        bitPrice\n        createdAt\n        updatedAt\n        user {\n          username\n          firstname\n          lastname\n          avatarUrl\n        }\n      }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query ExampleQuery {\n    getAuctions {\n        bids {\n            id\n            userId\n            auctionId\n            bitPrice\n            createdAt\n            updatedAt\n            user {\n                username\n                firstname\n                lastname\n                avatarUrl\n            }\n        }\n        createdAt\n        creator {\n            username\n            firstname\n            lastname\n            avatarUrl\n        }\n        description\n        finishedAt\n        id\n        sortOrder\n        startedAt\n        status {\n            id\n            name\n        }\n        title\n        updatedAt\n        winner {\n            username\n            firstname\n            lastname\n            avatarUrl\n        }\n    }\n}\n"): (typeof documents)["\n    query ExampleQuery {\n    getAuctions {\n        bids {\n            id\n            userId\n            auctionId\n            bitPrice\n            createdAt\n            updatedAt\n            user {\n                username\n                firstname\n                lastname\n                avatarUrl\n            }\n        }\n        createdAt\n        creator {\n            username\n            firstname\n            lastname\n            avatarUrl\n        }\n        description\n        finishedAt\n        id\n        sortOrder\n        startedAt\n        status {\n            id\n            name\n        }\n        title\n        updatedAt\n        winner {\n            username\n            firstname\n            lastname\n            avatarUrl\n        }\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Logout($logoutId: Int!) {\n  logout(id: $logoutId) {\n    loggedOut\n  }\n}"): (typeof documents)["\nmutation Logout($logoutId: Int!) {\n  logout(id: $logoutId) {\n    loggedOut\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Signin($signInInput: SignInInput!) {\n  signin(signInInput: $signInInput) {\n    user {\n      username\n      id\n      email\n    }\n    refreshToken\n    accessToken\n  }\n}\n"): (typeof documents)["\nmutation Signin($signInInput: SignInInput!) {\n  signin(signInInput: $signInInput) {\n    user {\n      username\n      id\n      email\n    }\n    refreshToken\n    accessToken\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Signup($signUpInput: SignUpInput!) {\n    signup(signUpInput: $signUpInput) {\n      user {\n        username\n        id\n        email\n      }\n      refreshToken\n      accessToken\n    }\n  }\n"): (typeof documents)["\n  mutation Signup($signUpInput: SignUpInput!) {\n    signup(signUpInput: $signUpInput) {\n      user {\n        username\n        id\n        email\n      }\n      refreshToken\n      accessToken\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetAllMyRooms {\n      getAllMyRooms {\n        id\n        ownerId\n        title\n        description\n        createdAt\n        updatedAt\n      }\n    }\n"): (typeof documents)["\n    query GetAllMyRooms {\n      getAllMyRooms {\n        id\n        ownerId\n        title\n        description\n        createdAt\n        updatedAt\n      }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAllRooms {\n    getAllRooms {\n      id\n      ownerId\n      title\n      description\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query GetAllRooms {\n    getAllRooms {\n      id\n      ownerId\n      title\n      description\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetAllMessagesByRoomId($userMessage: UserMessages!) {\n  getAllMessagesByRoomId(userMessage: $userMessage) {\n    content\n    createdAt\n    id\n    roomId\n    updatedAt\n    userId\n  }\n}\n"): (typeof documents)["\nquery GetAllMessagesByRoomId($userMessage: UserMessages!) {\n  getAllMessagesByRoomId(userMessage: $userMessage) {\n    content\n    createdAt\n    id\n    roomId\n    updatedAt\n    userId\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetAllUsersByRoomId($roomId: Float!) {\n      getAllUsersByRoomId(roomId: $roomId) {\n        username\n        firstname\n        lastname\n        avatarUrl\n      }\n    }\n"): (typeof documents)["\n    query GetAllUsersByRoomId($roomId: Float!) {\n      getAllUsersByRoomId(roomId: $roomId) {\n        username\n        firstname\n        lastname\n        avatarUrl\n      }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation Mutation($newMessage: NewMessageInput!) {\n      sendMessage(newMessage: $newMessage) {\n        id\n        userId\n        roomId\n        content\n        createdAt\n        updatedAt\n      }\n    }\n"): (typeof documents)["\n    mutation Mutation($newMessage: NewMessageInput!) {\n      sendMessage(newMessage: $newMessage) {\n        id\n        userId\n        roomId\n        content\n        createdAt\n        updatedAt\n      }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateMyRoom($input: RoomCreateInput!) {\n      createMyRoom(input: $input) {\n        id\n        ownerId\n        title\n        description\n        createdAt\n        updatedAt\n      }\n    }\n\n"): (typeof documents)["\n    mutation CreateMyRoom($input: RoomCreateInput!) {\n      createMyRoom(input: $input) {\n        id\n        ownerId\n        title\n        description\n        createdAt\n        updatedAt\n      }\n    }\n\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetRoomById($roomId: Float!) {\n    getRoomById(roomId: $roomId) {\n      ownerId\n    }\n  }\n"): (typeof documents)["\n  query GetRoomById($roomId: Float!) {\n    getRoomById(roomId: $roomId) {\n      ownerId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation JoinToRoom($roomId: Float!) {\n  joinToRoom(roomId: $roomId) {\n    username\n    firstname\n    lastname\n    avatarUrl\n  }\n}\n"): (typeof documents)["\n    mutation JoinToRoom($roomId: Float!) {\n  joinToRoom(roomId: $roomId) {\n    username\n    firstname\n    lastname\n    avatarUrl\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation LeaveFromRoom($roomId: Float!) {\n  leaveFromRoom(roomId: $roomId) {\n    avatarUrl\n    lastname\n    firstname\n    username\n  }\n}\n"): (typeof documents)["\nmutation LeaveFromRoom($roomId: Float!) {\n  leaveFromRoom(roomId: $roomId) {\n    avatarUrl\n    lastname\n    firstname\n    username\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription NewMessage($roomId: Int!) {\n    newMessage(roomId: $roomId) {\n      content\n      createdAt\n      id\n      updatedAt\n      roomId\n      userId\n    }\n  }\n"): (typeof documents)["\n  subscription NewMessage($roomId: Int!) {\n    newMessage(roomId: $roomId) {\n      content\n      createdAt\n      id\n      updatedAt\n      roomId\n      userId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery GetAllNews($sortBy: String, $sortOrder: String, $skip: Int, $take: Int, $search: String) {\n\t\tnews: getAllNews(sortBy: $sortBy, sortOrder: $sortOrder, skip: $skip, take: $take, search: $search) {\n\t\t  totalCount\n\t\t  items {\n\t\t\tid\n\t\t\ttitle\n\t\t\ttext: description\n\t\t\tupdatedAt\n\t\t\tdate: createdAt\n\t\t\timages: imageUrl\n\t\t\tuserId\n\t\t}\n\t }\n  } \n"): (typeof documents)["\n\tquery GetAllNews($sortBy: String, $sortOrder: String, $skip: Int, $take: Int, $search: String) {\n\t\tnews: getAllNews(sortBy: $sortBy, sortOrder: $sortOrder, skip: $skip, take: $take, search: $search) {\n\t\t  totalCount\n\t\t  items {\n\t\t\tid\n\t\t\ttitle\n\t\t\ttext: description\n\t\t\tupdatedAt\n\t\t\tdate: createdAt\n\t\t\timages: imageUrl\n\t\t\tuserId\n\t\t}\n\t }\n  } \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation CreateToken($data: CreateTokenInput!) {\n  createToken(data: $data) {\n    updatedAt\n    title\n    sortOrder\n    points\n    price\n    id\n    description\n    createdAt\n  }\n}\n"): (typeof documents)["\nmutation CreateToken($data: CreateTokenInput!) {\n  createToken(data: $data) {\n    updatedAt\n    title\n    sortOrder\n    points\n    price\n    id\n    description\n    createdAt\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation GetTokenById($getTokenByIdId: Int!) {\n  getTokenById(id: $getTokenByIdId) {\n    createdAt\n    description\n    points\n    id\n    price\n    updatedAt\n    title\n    sortOrder\n  }\n}\n"): (typeof documents)["\nmutation GetTokenById($getTokenByIdId: Int!) {\n  getTokenById(id: $getTokenByIdId) {\n    createdAt\n    description\n    points\n    id\n    price\n    updatedAt\n    title\n    sortOrder\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation UpdateToken($updateTokenId: Int!, $data: UpdateTokenInput!) {\n  updateToken(id: $updateTokenId, data: $data) {\n    createdAt\n    description\n    id\n    points\n    price\n    sortOrder\n    title\n    updatedAt\n  }\n}\n"): (typeof documents)["\nmutation UpdateToken($updateTokenId: Int!, $data: UpdateTokenInput!) {\n  updateToken(id: $updateTokenId, data: $data) {\n    createdAt\n    description\n    id\n    points\n    price\n    sortOrder\n    title\n    updatedAt\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetMyReferrals {\n      getMyReferrals {\n        id\n        cuid\n        email\n        username\n        createdAt\n      }\n    }\n"): (typeof documents)["\n    query GetMyReferrals {\n      getMyReferrals {\n        id\n        cuid\n        email\n        username\n        createdAt\n      }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProfile {\n    getProfile {\n      id\n      username\n      email\n      firstname\n      phone\n      lastname\n      patronymic\n      instagram\n      confirmationCode\n      avatarUrl\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query GetProfile {\n    getProfile {\n      id\n      username\n      email\n      firstname\n      phone\n      lastname\n      patronymic\n      instagram\n      confirmationCode\n      avatarUrl\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUserAddress {\n    getUserAddress {\n      country\n      city\n      address\n      index\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query GetUserAddress {\n    getUserAddress {\n      country\n      city\n      address\n      index\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetUserPayment {\n        getUserPayment {\n        firstname\n        lastname\n        patronymic\n        number\n        cvv\n        month\n        year\n        createdAt\n        updatedAt\n        }\n    }\n"): (typeof documents)["\n    query GetUserPayment {\n        getUserPayment {\n        firstname\n        lastname\n        patronymic\n        number\n        cvv\n        month\n        year\n        createdAt\n        updatedAt\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateUserAddress($input: UpdateAddressInput!) {\n    updateUserAddress(input: $input) {\n      country\n      city\n      address\n      index\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUserAddress($input: UpdateAddressInput!) {\n    updateUserAddress(input: $input) {\n      country\n      city\n      address\n      index\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EditProfile($updateUserInput: UpdateUserInput!) {\n    editProfile(updateUserInput: $updateUserInput) {\n      id\n      username\n      email\n      firstname\n      phone\n      lastname\n      patronymic\n      instagram\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation EditProfile($updateUserInput: UpdateUserInput!) {\n    editProfile(updateUserInput: $updateUserInput) {\n      id\n      username\n      email\n      firstname\n      phone\n      lastname\n      patronymic\n      instagram\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateUserPayment($input: UpdatePaymentInput!) {\n    updateUserPayment(input: $input) {\n      firstname\n      lastname\n      patronymic\n      number\n      cvv\n      month\n      year\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUserPayment($input: UpdatePaymentInput!) {\n    updateUserPayment(input: $input) {\n      firstname\n      lastname\n      patronymic\n      number\n      cvv\n      month\n      year\n      createdAt\n      updatedAt\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;