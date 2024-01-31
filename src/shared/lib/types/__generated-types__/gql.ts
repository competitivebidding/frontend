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
    "query GetAuctions($search: String, $sortBy: String, $sortOrder: String, $skip: Int, $take: Int) {\n  getAuctions(search: $search, sortBy: $sortBy, sortOrder: $sortOrder, skip: $skip, take: $take) {\n    id\n    title\n    description\n    startingPrice\n    creator {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    winner {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    status {\n      id\n      name\n    }\n    sortOrder\n    finishedAt\n    startedAt\n    createdAt\n    updatedAt\n    bids {\n      id\n      userId\n      auctionId\n      bitPrice\n      createdAt\n      updatedAt\n      user {\n        id\n        username\n        firstname\n        lastname\n        avatarUrl\n        balance\n      }\n    }\n  }\n}\n": types.GetAuctionsDocument,
    "\n    mutation CreateMyBid($input: CreateBidInput!) {\n      createMyBid(input: $input) {\n        id\n        userId\n        auctionId\n        bitPrice\n        createdAt\n        updatedAt\n        user {\n          username\n          firstname\n          lastname\n          avatarUrl\n        }\n      }\n    }\n": types.CreateMyBidDocument,
    "\n    query GetBidsByAuctionId($auctionId: Int!) {\n      getBidsByAuctionId(auctionId: $auctionId) {\n        id\n        userId\n        auctionId\n        bitPrice\n        createdAt\n        updatedAt\n        user {\n          username\n          firstname\n          lastname\n          avatarUrl\n        }\n      }\n    }\n": types.GetBidsByAuctionIdDocument,
    "\n    query GetAuction($auctionId: Int!) {\n  getAuction(auctionId: $auctionId) {\n    id\n    title\n    description\n    startingPrice\n    creator {\n      username\n      firstname\n      lastname\n      avatarUrl\n    }\n    winner {\n      username\n      firstname\n      lastname\n      avatarUrl\n    }\n    status {\n      id\n      name\n    }\n    sortOrder\n    finishedAt\n    startedAt\n    createdAt\n    updatedAt\n    bids {\n      id\n      userId\n      auctionId\n      bitPrice\n      createdAt\n      updatedAt\n      user {\n        username\n        firstname\n        lastname\n        avatarUrl\n      }\n    }\n  }\n}": types.GetAuctionDocument,
    "\nmutation CreateMyAuction($input: CreateAuctionInput!) {\n  createMyAuction(input: $input) {\n    id\n    title\n    startingPrice\n    description\n    creator {\n      username\n      firstname\n      lastname\n      avatarUrl\n    }\n    winner {\n      username\n      firstname\n      lastname\n      avatarUrl\n    }\n    status {\n      id\n      name\n    }\n    sortOrder\n    finishedAt\n    startedAt\n    createdAt\n    updatedAt\n    bids {\n      id\n      userId\n      bitPrice\n      createdAt\n      auctionId\n      updatedAt\n      user {\n        username\n        firstname\n        lastname\n        avatarUrl\n      }\n    }\n  }\n} ": types.CreateMyAuctionDocument,
    "\nmutation Logout($logoutId: Int!) {\n  logout(id: $logoutId) {\n    loggedOut\n  }\n}": types.LogoutDocument,
    "\nmutation Signin($signInInput: SignInInput!) {\n  signin(signInInput: $signInInput) {\n    user {\n      username\n      id\n      email\n    }\n    refreshToken\n    accessToken\n  }\n}\n": types.SigninDocument,
    "\n  mutation Signup($signUpInput: SignUpInput!) {\n    signup(signUpInput: $signUpInput) {\n      user {\n        username\n        id\n        email\n      }\n      refreshToken\n      accessToken\n    }\n  }\n": types.SignupDocument,
    "\n    query GetAllMyRooms {\n  getAllMyRooms {\n    id\n    owner {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    title\n    description\n    isPrivate\n    createdAt\n    updatedAt\n    messages {\n      content\n    }\n  }\n}\n": types.GetAllMyRoomsDocument,
    "\nquery Items($input: UserMessages!) {\n  getAllMessagesByRoomId(input: $input) {\n    items {\n      id\n      user {\n        id\n        username\n        firstname\n        lastname\n        avatarUrl\n        balance\n      }\n      room {\n        id\n        owner {\n          id\n          username\n          firstname\n          lastname\n          avatarUrl\n          balance\n        }\n        title\n        description\n        isPrivate\n        createdAt\n        updatedAt\n      }\n      content\n      createdAt\n      updatedAt\n    }\n    totalCount\n  }\n}\n": types.ItemsDocument,
    "\n    query GetAllUsersByRoomId($roomId: Float!) {\n  getAllUsersByRoomId(roomId: $roomId) {\n    id\n    username\n    firstname\n    lastname\n    avatarUrl\n    balance\n  }\n}\n": types.GetAllUsersByRoomIdDocument,
    "\n    mutation SendMessage($newMessage: NewMessageInput!) {\n  sendMessage(newMessage: $newMessage) {\n    id\n    user {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    room {\n      id\n      owner {\n        id\n        username\n        firstname\n        lastname\n        avatarUrl\n        balance\n      }\n      title\n      description\n      isPrivate\n      createdAt\n      updatedAt\n    }\n    content\n    createdAt\n    updatedAt\n  }\n}\n": types.SendMessageDocument,
    "\n    \n\n\nmutation CreateMyRoom($input: RoomCreateInput!) {\n  createMyRoom(input: $input) {\n    id\n    owner {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    title\n    description\n    isPrivate\n    createdAt\n    updatedAt\n  }\n}\n\n": types.CreateMyRoomDocument,
    "\n    mutation RemoveMessage($removeMessageId: Float!) {\n  removeMessage(id: $removeMessageId) {\n    id\n    user {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    room {\n      id\n      owner {\n        id\n        username\n        firstname\n        lastname\n        avatarUrl\n        balance\n      }\n      title\n      description\n      isPrivate\n      createdAt\n      updatedAt\n    }\n    content\n    createdAt\n    updatedAt\n  }\n}\n": types.RemoveMessageDocument,
    "\n   mutation UpdateMessage($input: MessageUpdateInput!) {\n  updateMessage(input: $input) {\n    id\n    user {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    room {\n      id\n      owner {\n        id\n        username\n        firstname\n        lastname\n        avatarUrl\n        balance\n      }\n      title\n      description\n      isPrivate\n      createdAt\n      updatedAt\n    }\n    content\n    createdAt\n    updatedAt\n  }\n}\n": types.UpdateMessageDocument,
    "\n query GetRoomById($roomId: Float!) {\n  getRoomById(roomId: $roomId) {\n    id\n    owner {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    title\n    description\n    isPrivate\n    createdAt\n    updatedAt\n  }\n}\n": types.GetRoomByIdDocument,
    "\n    mutation JoinToRoom($roomId: Float!) {\n  joinToRoom(roomId: $roomId) {\n    username\n    firstname\n    lastname\n    avatarUrl\n  }\n}\n": types.JoinToRoomDocument,
    "\nmutation LeaveFromRoom($roomId: Float!) {\n  leaveFromRoom(roomId: $roomId) {\n    avatarUrl\n    lastname\n    firstname\n    username\n  }\n}\n": types.LeaveFromRoomDocument,
    "\nmutation AddUserInRoom($addUser: AddUserInput!) {\n  addUserInRoom(addUser: $addUser) {\n    username\n    firstname\n    lastname\n    avatarUrl\n  }\n}": types.AddUserInRoomDocument,
    "\nmutation RemoveMyRoom($roomId: Float!) {\n  removeMyRoom(roomId: $roomId) {\n    id\n    owner {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    title\n    description\n    isPrivate\n    createdAt\n    updatedAt\n  }\n}": types.RemoveMyRoomDocument,
    "\n  subscription NewMessage($roomId: Int!) {\n  newMessage(roomId: $roomId) {\n    id\n    user {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    room {\n      id\n      owner {\n        id\n        username\n        firstname\n        lastname\n        avatarUrl\n        balance\n      }\n      title\n      description\n      isPrivate\n      createdAt\n      updatedAt\n    }\n    content\n    createdAt\n    updatedAt\n  }\n}\n": types.NewMessageDocument,
    "\n\tquery GetAllNews($sortBy: String, $sortOrder: String, $skip: Int, $take: Int, $search: String) {\n\t\tnews: getAllNews(sortBy: $sortBy, sortOrder: $sortOrder, skip: $skip, take: $take, search: $search) {\n\t\t  totalCount\n\t\t  items {\n\t\t\tid\n\t\t\ttitle\n\t\t\ttext: description\n\t\t\tupdatedAt\n\t\t\tdate: createdAt\n\t\t\timages: imageUrl\n\t\t\tuserId\n\t\t}\n\t }\n  } \n": types.GetAllNewsDocument,
    "\nsubscription Notification($userId: Float!) {\n  notification(userId: $userId) {\n    id\n    auctionId\n    userId\n    message\n    isRead\n    typeNotifi\n  }\n}": types.NotificationDocument,
    "\nmutation CreateToken($data: CreateTokenInput!) {\n  createToken(data: $data) {\n    updatedAt\n    title\n    sortOrder\n    points\n    price\n    id\n    description\n    createdAt\n  }\n}\n": types.CreateTokenDocument,
    "\nmutation GetTokenById($getTokenByIdId: Int!) {\n  getTokenById(id: $getTokenByIdId) {\n    createdAt\n    description\n    points\n    id\n    price\n    updatedAt\n    title\n    sortOrder\n  }\n}\n": types.GetTokenByIdDocument,
    "\nmutation UpdateToken($updateTokenId: Int!, $data: UpdateTokenInput!) {\n  updateToken(id: $updateTokenId, data: $data) {\n    createdAt\n    description\n    id\n    points\n    price\n    sortOrder\n    title\n    updatedAt\n  }\n}\n": types.UpdateTokenDocument,
    "\nmutation PayOperation($createPayInput: CreatePayInput!) {\n  payOperation(createPayInput: $createPayInput) {\n    id\n    user_id\n    operation\n    typeOperation\n    amount\n    message\n    createAt\n  }\n}": types.PayOperationDocument,
    "\nquery GetAllMyPayOperation {\n  getAllMyPayOperation {\n    id\n    user_id\n    operation\n    typeOperation\n    amount\n    message\n    createAt\n  }\n}": types.GetAllMyPayOperationDocument,
    "\nquery GetOneMyPayOperation($getOneMyPayOperationId: Int!) {\n  getOneMyPayOperation(id: $getOneMyPayOperationId) {\n    id\n    user_id\n    operation\n    typeOperation\n    amount\n    message\n    createAt\n  }\n}": types.GetOneMyPayOperationDocument,
    "\n    query GetMyReferrals {\n      getMyReferrals {\n        id\n        cuid\n        email\n        username\n        createdAt\n      }\n    }\n": types.GetMyReferralsDocument,
    "\n  query GetProfile {\n  getProfile {\n    id\n    username\n    email\n    firstname\n    phone\n    lastname\n    patronymic\n    instagram\n    confirmationCode\n    avatarUrl\n    balance\n    createdAt\n    updatedAt\n  }\n}\n": types.GetProfileDocument,
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
export function gql(source: "query GetAuctions($search: String, $sortBy: String, $sortOrder: String, $skip: Int, $take: Int) {\n  getAuctions(search: $search, sortBy: $sortBy, sortOrder: $sortOrder, skip: $skip, take: $take) {\n    id\n    title\n    description\n    startingPrice\n    creator {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    winner {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    status {\n      id\n      name\n    }\n    sortOrder\n    finishedAt\n    startedAt\n    createdAt\n    updatedAt\n    bids {\n      id\n      userId\n      auctionId\n      bitPrice\n      createdAt\n      updatedAt\n      user {\n        id\n        username\n        firstname\n        lastname\n        avatarUrl\n        balance\n      }\n    }\n  }\n}\n"): (typeof documents)["query GetAuctions($search: String, $sortBy: String, $sortOrder: String, $skip: Int, $take: Int) {\n  getAuctions(search: $search, sortBy: $sortBy, sortOrder: $sortOrder, skip: $skip, take: $take) {\n    id\n    title\n    description\n    startingPrice\n    creator {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    winner {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    status {\n      id\n      name\n    }\n    sortOrder\n    finishedAt\n    startedAt\n    createdAt\n    updatedAt\n    bids {\n      id\n      userId\n      auctionId\n      bitPrice\n      createdAt\n      updatedAt\n      user {\n        id\n        username\n        firstname\n        lastname\n        avatarUrl\n        balance\n      }\n    }\n  }\n}\n"];
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
export function gql(source: "\n    query GetAuction($auctionId: Int!) {\n  getAuction(auctionId: $auctionId) {\n    id\n    title\n    description\n    startingPrice\n    creator {\n      username\n      firstname\n      lastname\n      avatarUrl\n    }\n    winner {\n      username\n      firstname\n      lastname\n      avatarUrl\n    }\n    status {\n      id\n      name\n    }\n    sortOrder\n    finishedAt\n    startedAt\n    createdAt\n    updatedAt\n    bids {\n      id\n      userId\n      auctionId\n      bitPrice\n      createdAt\n      updatedAt\n      user {\n        username\n        firstname\n        lastname\n        avatarUrl\n      }\n    }\n  }\n}"): (typeof documents)["\n    query GetAuction($auctionId: Int!) {\n  getAuction(auctionId: $auctionId) {\n    id\n    title\n    description\n    startingPrice\n    creator {\n      username\n      firstname\n      lastname\n      avatarUrl\n    }\n    winner {\n      username\n      firstname\n      lastname\n      avatarUrl\n    }\n    status {\n      id\n      name\n    }\n    sortOrder\n    finishedAt\n    startedAt\n    createdAt\n    updatedAt\n    bids {\n      id\n      userId\n      auctionId\n      bitPrice\n      createdAt\n      updatedAt\n      user {\n        username\n        firstname\n        lastname\n        avatarUrl\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation CreateMyAuction($input: CreateAuctionInput!) {\n  createMyAuction(input: $input) {\n    id\n    title\n    startingPrice\n    description\n    creator {\n      username\n      firstname\n      lastname\n      avatarUrl\n    }\n    winner {\n      username\n      firstname\n      lastname\n      avatarUrl\n    }\n    status {\n      id\n      name\n    }\n    sortOrder\n    finishedAt\n    startedAt\n    createdAt\n    updatedAt\n    bids {\n      id\n      userId\n      bitPrice\n      createdAt\n      auctionId\n      updatedAt\n      user {\n        username\n        firstname\n        lastname\n        avatarUrl\n      }\n    }\n  }\n} "): (typeof documents)["\nmutation CreateMyAuction($input: CreateAuctionInput!) {\n  createMyAuction(input: $input) {\n    id\n    title\n    startingPrice\n    description\n    creator {\n      username\n      firstname\n      lastname\n      avatarUrl\n    }\n    winner {\n      username\n      firstname\n      lastname\n      avatarUrl\n    }\n    status {\n      id\n      name\n    }\n    sortOrder\n    finishedAt\n    startedAt\n    createdAt\n    updatedAt\n    bids {\n      id\n      userId\n      bitPrice\n      createdAt\n      auctionId\n      updatedAt\n      user {\n        username\n        firstname\n        lastname\n        avatarUrl\n      }\n    }\n  }\n} "];
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
export function gql(source: "\n    query GetAllMyRooms {\n  getAllMyRooms {\n    id\n    owner {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    title\n    description\n    isPrivate\n    createdAt\n    updatedAt\n    messages {\n      content\n    }\n  }\n}\n"): (typeof documents)["\n    query GetAllMyRooms {\n  getAllMyRooms {\n    id\n    owner {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    title\n    description\n    isPrivate\n    createdAt\n    updatedAt\n    messages {\n      content\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Items($input: UserMessages!) {\n  getAllMessagesByRoomId(input: $input) {\n    items {\n      id\n      user {\n        id\n        username\n        firstname\n        lastname\n        avatarUrl\n        balance\n      }\n      room {\n        id\n        owner {\n          id\n          username\n          firstname\n          lastname\n          avatarUrl\n          balance\n        }\n        title\n        description\n        isPrivate\n        createdAt\n        updatedAt\n      }\n      content\n      createdAt\n      updatedAt\n    }\n    totalCount\n  }\n}\n"): (typeof documents)["\nquery Items($input: UserMessages!) {\n  getAllMessagesByRoomId(input: $input) {\n    items {\n      id\n      user {\n        id\n        username\n        firstname\n        lastname\n        avatarUrl\n        balance\n      }\n      room {\n        id\n        owner {\n          id\n          username\n          firstname\n          lastname\n          avatarUrl\n          balance\n        }\n        title\n        description\n        isPrivate\n        createdAt\n        updatedAt\n      }\n      content\n      createdAt\n      updatedAt\n    }\n    totalCount\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetAllUsersByRoomId($roomId: Float!) {\n  getAllUsersByRoomId(roomId: $roomId) {\n    id\n    username\n    firstname\n    lastname\n    avatarUrl\n    balance\n  }\n}\n"): (typeof documents)["\n    query GetAllUsersByRoomId($roomId: Float!) {\n  getAllUsersByRoomId(roomId: $roomId) {\n    id\n    username\n    firstname\n    lastname\n    avatarUrl\n    balance\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation SendMessage($newMessage: NewMessageInput!) {\n  sendMessage(newMessage: $newMessage) {\n    id\n    user {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    room {\n      id\n      owner {\n        id\n        username\n        firstname\n        lastname\n        avatarUrl\n        balance\n      }\n      title\n      description\n      isPrivate\n      createdAt\n      updatedAt\n    }\n    content\n    createdAt\n    updatedAt\n  }\n}\n"): (typeof documents)["\n    mutation SendMessage($newMessage: NewMessageInput!) {\n  sendMessage(newMessage: $newMessage) {\n    id\n    user {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    room {\n      id\n      owner {\n        id\n        username\n        firstname\n        lastname\n        avatarUrl\n        balance\n      }\n      title\n      description\n      isPrivate\n      createdAt\n      updatedAt\n    }\n    content\n    createdAt\n    updatedAt\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    \n\n\nmutation CreateMyRoom($input: RoomCreateInput!) {\n  createMyRoom(input: $input) {\n    id\n    owner {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    title\n    description\n    isPrivate\n    createdAt\n    updatedAt\n  }\n}\n\n"): (typeof documents)["\n    \n\n\nmutation CreateMyRoom($input: RoomCreateInput!) {\n  createMyRoom(input: $input) {\n    id\n    owner {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    title\n    description\n    isPrivate\n    createdAt\n    updatedAt\n  }\n}\n\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation RemoveMessage($removeMessageId: Float!) {\n  removeMessage(id: $removeMessageId) {\n    id\n    user {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    room {\n      id\n      owner {\n        id\n        username\n        firstname\n        lastname\n        avatarUrl\n        balance\n      }\n      title\n      description\n      isPrivate\n      createdAt\n      updatedAt\n    }\n    content\n    createdAt\n    updatedAt\n  }\n}\n"): (typeof documents)["\n    mutation RemoveMessage($removeMessageId: Float!) {\n  removeMessage(id: $removeMessageId) {\n    id\n    user {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    room {\n      id\n      owner {\n        id\n        username\n        firstname\n        lastname\n        avatarUrl\n        balance\n      }\n      title\n      description\n      isPrivate\n      createdAt\n      updatedAt\n    }\n    content\n    createdAt\n    updatedAt\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n   mutation UpdateMessage($input: MessageUpdateInput!) {\n  updateMessage(input: $input) {\n    id\n    user {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    room {\n      id\n      owner {\n        id\n        username\n        firstname\n        lastname\n        avatarUrl\n        balance\n      }\n      title\n      description\n      isPrivate\n      createdAt\n      updatedAt\n    }\n    content\n    createdAt\n    updatedAt\n  }\n}\n"): (typeof documents)["\n   mutation UpdateMessage($input: MessageUpdateInput!) {\n  updateMessage(input: $input) {\n    id\n    user {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    room {\n      id\n      owner {\n        id\n        username\n        firstname\n        lastname\n        avatarUrl\n        balance\n      }\n      title\n      description\n      isPrivate\n      createdAt\n      updatedAt\n    }\n    content\n    createdAt\n    updatedAt\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n query GetRoomById($roomId: Float!) {\n  getRoomById(roomId: $roomId) {\n    id\n    owner {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    title\n    description\n    isPrivate\n    createdAt\n    updatedAt\n  }\n}\n"): (typeof documents)["\n query GetRoomById($roomId: Float!) {\n  getRoomById(roomId: $roomId) {\n    id\n    owner {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    title\n    description\n    isPrivate\n    createdAt\n    updatedAt\n  }\n}\n"];
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
export function gql(source: "\nmutation AddUserInRoom($addUser: AddUserInput!) {\n  addUserInRoom(addUser: $addUser) {\n    username\n    firstname\n    lastname\n    avatarUrl\n  }\n}"): (typeof documents)["\nmutation AddUserInRoom($addUser: AddUserInput!) {\n  addUserInRoom(addUser: $addUser) {\n    username\n    firstname\n    lastname\n    avatarUrl\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation RemoveMyRoom($roomId: Float!) {\n  removeMyRoom(roomId: $roomId) {\n    id\n    owner {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    title\n    description\n    isPrivate\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["\nmutation RemoveMyRoom($roomId: Float!) {\n  removeMyRoom(roomId: $roomId) {\n    id\n    owner {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    title\n    description\n    isPrivate\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription NewMessage($roomId: Int!) {\n  newMessage(roomId: $roomId) {\n    id\n    user {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    room {\n      id\n      owner {\n        id\n        username\n        firstname\n        lastname\n        avatarUrl\n        balance\n      }\n      title\n      description\n      isPrivate\n      createdAt\n      updatedAt\n    }\n    content\n    createdAt\n    updatedAt\n  }\n}\n"): (typeof documents)["\n  subscription NewMessage($roomId: Int!) {\n  newMessage(roomId: $roomId) {\n    id\n    user {\n      id\n      username\n      firstname\n      lastname\n      avatarUrl\n      balance\n    }\n    room {\n      id\n      owner {\n        id\n        username\n        firstname\n        lastname\n        avatarUrl\n        balance\n      }\n      title\n      description\n      isPrivate\n      createdAt\n      updatedAt\n    }\n    content\n    createdAt\n    updatedAt\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery GetAllNews($sortBy: String, $sortOrder: String, $skip: Int, $take: Int, $search: String) {\n\t\tnews: getAllNews(sortBy: $sortBy, sortOrder: $sortOrder, skip: $skip, take: $take, search: $search) {\n\t\t  totalCount\n\t\t  items {\n\t\t\tid\n\t\t\ttitle\n\t\t\ttext: description\n\t\t\tupdatedAt\n\t\t\tdate: createdAt\n\t\t\timages: imageUrl\n\t\t\tuserId\n\t\t}\n\t }\n  } \n"): (typeof documents)["\n\tquery GetAllNews($sortBy: String, $sortOrder: String, $skip: Int, $take: Int, $search: String) {\n\t\tnews: getAllNews(sortBy: $sortBy, sortOrder: $sortOrder, skip: $skip, take: $take, search: $search) {\n\t\t  totalCount\n\t\t  items {\n\t\t\tid\n\t\t\ttitle\n\t\t\ttext: description\n\t\t\tupdatedAt\n\t\t\tdate: createdAt\n\t\t\timages: imageUrl\n\t\t\tuserId\n\t\t}\n\t }\n  } \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nsubscription Notification($userId: Float!) {\n  notification(userId: $userId) {\n    id\n    auctionId\n    userId\n    message\n    isRead\n    typeNotifi\n  }\n}"): (typeof documents)["\nsubscription Notification($userId: Float!) {\n  notification(userId: $userId) {\n    id\n    auctionId\n    userId\n    message\n    isRead\n    typeNotifi\n  }\n}"];
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
export function gql(source: "\nmutation PayOperation($createPayInput: CreatePayInput!) {\n  payOperation(createPayInput: $createPayInput) {\n    id\n    user_id\n    operation\n    typeOperation\n    amount\n    message\n    createAt\n  }\n}"): (typeof documents)["\nmutation PayOperation($createPayInput: CreatePayInput!) {\n  payOperation(createPayInput: $createPayInput) {\n    id\n    user_id\n    operation\n    typeOperation\n    amount\n    message\n    createAt\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetAllMyPayOperation {\n  getAllMyPayOperation {\n    id\n    user_id\n    operation\n    typeOperation\n    amount\n    message\n    createAt\n  }\n}"): (typeof documents)["\nquery GetAllMyPayOperation {\n  getAllMyPayOperation {\n    id\n    user_id\n    operation\n    typeOperation\n    amount\n    message\n    createAt\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetOneMyPayOperation($getOneMyPayOperationId: Int!) {\n  getOneMyPayOperation(id: $getOneMyPayOperationId) {\n    id\n    user_id\n    operation\n    typeOperation\n    amount\n    message\n    createAt\n  }\n}"): (typeof documents)["\nquery GetOneMyPayOperation($getOneMyPayOperationId: Int!) {\n  getOneMyPayOperation(id: $getOneMyPayOperationId) {\n    id\n    user_id\n    operation\n    typeOperation\n    amount\n    message\n    createAt\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetMyReferrals {\n      getMyReferrals {\n        id\n        cuid\n        email\n        username\n        createdAt\n      }\n    }\n"): (typeof documents)["\n    query GetMyReferrals {\n      getMyReferrals {\n        id\n        cuid\n        email\n        username\n        createdAt\n      }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProfile {\n  getProfile {\n    id\n    username\n    email\n    firstname\n    phone\n    lastname\n    patronymic\n    instagram\n    confirmationCode\n    avatarUrl\n    balance\n    createdAt\n    updatedAt\n  }\n}\n"): (typeof documents)["\n  query GetProfile {\n  getProfile {\n    id\n    username\n    email\n    firstname\n    phone\n    lastname\n    patronymic\n    instagram\n    confirmationCode\n    avatarUrl\n    balance\n    createdAt\n    updatedAt\n  }\n}\n"];
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