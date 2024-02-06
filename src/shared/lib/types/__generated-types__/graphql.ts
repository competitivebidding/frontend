/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type AddUserInput = {
  roomId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};

export type Address = {
  __typename?: 'Address';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  index?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type Auction = {
  __typename?: 'Auction';
  bids?: Maybe<Array<Bid>>;
  createdAt: Scalars['DateTime']['output'];
  creator: UserPublic;
  description: Scalars['String']['output'];
  finishedAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  sortOrder: Scalars['Int']['output'];
  startedAt: Scalars['DateTime']['output'];
  startingPrice: Scalars['Int']['output'];
  status: Status;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  winner?: Maybe<UserPublic>;
};

export type Bid = {
  __typename?: 'Bid';
  auctionId: Scalars['Int']['output'];
  bitPrice: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<UserPublic>;
  userId: Scalars['Int']['output'];
};

export type BidInput = {
  auctionId?: InputMaybe<Scalars['Int']['input']>;
  bitPrice?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  imageUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  parentId?: Maybe<Scalars['Int']['output']>;
  slug: Scalars['String']['output'];
  sortOrder: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ChangePasswordDto = {
  __typename?: 'ChangePasswordDto';
  confirmationCode: Scalars['String']['output'];
  email: Scalars['String']['output'];
  password: Scalars['String']['output'];
};

export type CreateAuctionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  finishedAt: Scalars['DateTime']['input'];
  startedAt: Scalars['DateTime']['input'];
  startingPrice: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type CreateBidInput = {
  auctionId: Scalars['Int']['input'];
  bitPrice: Scalars['Int']['input'];
};

export type CreateHistoryInput = {
  points: Scalars['Int']['input'];
  price: Scalars['Float']['input'];
  tokenId: Scalars['Int']['input'];
};

export type CreateMessageTiketInput = {
  message: Scalars['String']['input'];
  title: Scalars['String']['input'];
  toWhom: Scalars['Int']['input'];
  topicId: Scalars['Int']['input'];
};

export type CreatePayInput = {
  amount: Scalars['Int']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  operation: Scalars['String']['input'];
  typeOperation: Scalars['String']['input'];
};

export type CreateTokenInput = {
  description: Scalars['String']['input'];
  points: Scalars['Int']['input'];
  price: Scalars['Float']['input'];
  sortOrder: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type CreateTopicTiketInput = {
  message: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type FindAllMessageTiket = {
  fromWhomId?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  toWhomId?: InputMaybe<Scalars['Int']['input']>;
  topicId?: InputMaybe<Scalars['Int']['input']>;
};

export type FindAllTopicInput = {
  process?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  whoIsDoingId?: InputMaybe<Scalars['Int']['input']>;
};

export type ForgotPasswordDto = {
  __typename?: 'ForgotPasswordDto';
  email: Scalars['String']['output'];
};

export type ItemCategory = {
  __typename?: 'ItemCategory';
  items: Array<Category>;
};

export type ItemMessages = {
  __typename?: 'ItemMessages';
  items: Array<Message>;
  totalCount: Scalars['Int']['output'];
};

export type ItemNews = {
  __typename?: 'ItemNews';
  items: Array<News>;
  totalCount: Scalars['Int']['output'];
};

export type ItemRooms = {
  __typename?: 'ItemRooms';
  items: Array<RoomResponse>;
  totalCount: Scalars['Int']['output'];
};

export type ItemTokens = {
  __typename?: 'ItemTokens';
  items: Array<Token>;
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  loggedOut: Scalars['Boolean']['output'];
};

export type Message = {
  __typename?: 'Message';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  room: Room;
  updatedAt: Scalars['DateTime']['output'];
  user: UserPublic;
};

export type MessageTiket = {
  __typename?: 'MessageTiket';
  fromWhom: UserPublic;
  id: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  title: Scalars['String']['output'];
  toWhom: UserPublic;
  topicId: Scalars['Int']['output'];
};

export type MessageUpdateInput = {
  content: Scalars['String']['input'];
  id: Scalars['Int']['input'];
};

export type Messages = {
  __typename?: 'Messages';
  content: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addUserInRoom: UserPublic;
  changePassword: ChangePasswordDto;
  createInviteLink: Scalars['String']['output'];
  createMessageTiket: MessageTiket;
  createMyAuction: Auction;
  createMyBid: Bid;
  createMyRoom?: Maybe<Room>;
  createMyTokenHistory?: Maybe<TokenHistory>;
  createNews: News;
  createToken?: Maybe<Token>;
  createTopic: TopicTiket;
  deleteMyAuction: Scalars['Boolean']['output'];
  deleteMyBid: Scalars['Boolean']['output'];
  deleteNews: Scalars['Boolean']['output'];
  deleteToken: Scalars['Boolean']['output'];
  editProfile: User;
  forgotPassword: ForgotPasswordDto;
  getAllTokens?: Maybe<ItemTokens>;
  getMyTokenHistories?: Maybe<Array<TokenHistory>>;
  getNewTokens: NewTokensResponse;
  getTokenById?: Maybe<Token>;
  joinToInviteRoom: UserPublic;
  joinToRoom: UserPublic;
  leaveFromRoom: UserPublic;
  logout: LogoutResponse;
  markDoneTopic: TopicTiket;
  markInProcessTopic: TopicTiket;
  payOperation: Pay;
  readNotification: Notification;
  removeMessage?: Maybe<Message>;
  removeMessageTiket: MessageTiket;
  removeMyRoom?: Maybe<Room>;
  removeTopic: TopicTiket;
  removeUserInRoom: UserPublic;
  sendMessage?: Maybe<Message>;
  signin: SignResponse;
  signup: SignResponse;
  updateMessage?: Maybe<Message>;
  updateMessageTiket: MessageTiket;
  updateMyAuction: Auction;
  updateMyBid: Bid;
  updateMyRoom?: Maybe<Room>;
  updateMyTokenHistory?: Maybe<TokenHistory>;
  updateNews?: Maybe<News>;
  updateToken?: Maybe<Token>;
  updateTopic: TopicTiket;
  updateUserAddress: Address;
  updateUserPayment: Payment;
  watchAdvertising: Pay;
};


export type MutationAddUserInRoomArgs = {
  addUser: AddUserInput;
};


export type MutationCreateInviteLinkArgs = {
  roomId: Scalars['Float']['input'];
};


export type MutationCreateMessageTiketArgs = {
  createMessageTiketInput: CreateMessageTiketInput;
};


export type MutationCreateMyAuctionArgs = {
  input: CreateAuctionInput;
};


export type MutationCreateMyBidArgs = {
  input: CreateBidInput;
};


export type MutationCreateMyRoomArgs = {
  input: RoomCreateInput;
};


export type MutationCreateMyTokenHistoryArgs = {
  input: CreateHistoryInput;
};


export type MutationCreateNewsArgs = {
  data: NewsCreateInput;
};


export type MutationCreateTokenArgs = {
  data: CreateTokenInput;
};


export type MutationCreateTopicArgs = {
  createTopicTiketInput: CreateTopicTiketInput;
};


export type MutationDeleteMyAuctionArgs = {
  auctionId: Scalars['Int']['input'];
};


export type MutationDeleteMyBidArgs = {
  bidId: Scalars['Int']['input'];
};


export type MutationDeleteNewsArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteTokenArgs = {
  id: Scalars['Int']['input'];
};


export type MutationEditProfileArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationGetAllTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TokenInput>;
};


export type MutationGetMyTokenHistoriesArgs = {
  input: TokenHistoryInput;
};


export type MutationGetTokenByIdArgs = {
  id: Scalars['Int']['input'];
};


export type MutationJoinToInviteRoomArgs = {
  link: Scalars['String']['input'];
};


export type MutationJoinToRoomArgs = {
  roomId: Scalars['Float']['input'];
};


export type MutationLeaveFromRoomArgs = {
  roomId: Scalars['Float']['input'];
};


export type MutationLogoutArgs = {
  id: Scalars['Int']['input'];
};


export type MutationMarkDoneTopicArgs = {
  topicId: Scalars['Float']['input'];
};


export type MutationMarkInProcessTopicArgs = {
  topicId: Scalars['Float']['input'];
};


export type MutationPayOperationArgs = {
  createPayInput: CreatePayInput;
};


export type MutationRemoveMessageArgs = {
  id: Scalars['Float']['input'];
};


export type MutationRemoveMessageTiketArgs = {
  tiketId: Scalars['Int']['input'];
};


export type MutationRemoveMyRoomArgs = {
  roomId: Scalars['Float']['input'];
};


export type MutationRemoveTopicArgs = {
  topicId: Scalars['Int']['input'];
};


export type MutationRemoveUserInRoomArgs = {
  addUser: AddUserInput;
};


export type MutationSendMessageArgs = {
  newMessage: NewMessageInput;
};


export type MutationSigninArgs = {
  signInInput: SignInInput;
};


export type MutationSignupArgs = {
  signUpInput: SignUpInput;
};


export type MutationUpdateMessageArgs = {
  input: MessageUpdateInput;
};


export type MutationUpdateMessageTiketArgs = {
  tiketId: Scalars['Float']['input'];
  updateMessageTiketInput: UpdateMessageTiketInput;
};


export type MutationUpdateMyAuctionArgs = {
  auctionId: Scalars['Int']['input'];
  input: UpdateAuctionInput;
};


export type MutationUpdateMyBidArgs = {
  bidId: Scalars['Int']['input'];
  data: UpdateBidInput;
};


export type MutationUpdateMyRoomArgs = {
  input: RoomUpdateInput;
  roomId: Scalars['Float']['input'];
};


export type MutationUpdateMyTokenHistoryArgs = {
  input: UpdateHistoryInput;
};


export type MutationUpdateNewsArgs = {
  data: NewsUpdateInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateTokenArgs = {
  data: UpdateTokenInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateTopicArgs = {
  topicId: Scalars['Float']['input'];
  updateTopicTiketInput: UpdateTopicTiketInput;
};


export type MutationUpdateUserAddressArgs = {
  input: UpdateAddressInput;
};


export type MutationUpdateUserPaymentArgs = {
  input: UpdatePaymentInput;
};

export type NewMessageInput = {
  content: Scalars['String']['input'];
  roomId: Scalars['Int']['input'];
};

export type NewTokensResponse = {
  __typename?: 'NewTokensResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type News = {
  __typename?: 'News';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Int']['output'];
};

export type NewsCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};

export type NewsUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type Notification = {
  __typename?: 'Notification';
  auctionId: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  isRead: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
  typeNotifi: Scalars['String']['output'];
  userId: Scalars['Float']['output'];
};

export type Pay = {
  __typename?: 'Pay';
  amount: Scalars['Int']['output'];
  createAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  operation: Scalars['String']['output'];
  typeOperation: Scalars['String']['output'];
  user_id: Scalars['Float']['output'];
};

export type Payment = {
  __typename?: 'Payment';
  createdAt: Scalars['DateTime']['output'];
  cvv?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  month?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  year?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getAllAuctionStatuses: Array<Status>;
  getAllCategories: ItemCategory;
  getAllMessageTiket: Array<MessageTiket>;
  getAllMessagesByRoomId: ItemMessages;
  getAllMyNotification: Array<Notification>;
  getAllMyPayOperation: Array<Pay>;
  getAllMyRooms: Array<RoomResponse>;
  getAllNews: ItemNews;
  getAllRooms: ItemRooms;
  getAllTopics: Array<TopicTiket>;
  getAllUsersByRoomId: Array<UserPublic>;
  getAuction: Auction;
  getAuctionStatusById: Status;
  getAuctions: Array<Auction>;
  getBidById: Bid;
  getBidsByAuctionId: Array<Bid>;
  getInviteLink: Scalars['String']['output'];
  getMessageTiketById: MessageTiket;
  getMyCreatedAuctions: Array<Auction>;
  getMyReferrals: Array<ReferralUser>;
  getMyWonAuctions: Array<Auction>;
  getNewsById: News;
  getOneMyPayOperation: Pay;
  getProfile: User;
  getRoomById: Room;
  getTopicById: TopicTiket;
  getUserAddress: Address;
  getUserPayment: Payment;
  secret: Scalars['String']['output'];
};


export type QueryGetAllCategoriesArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllMessageTiketArgs = {
  findAllMessageTiket: FindAllMessageTiket;
};


export type QueryGetAllMessagesByRoomIdArgs = {
  input: UserMessages;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllNewsArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllRoomsArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllTopicsArgs = {
  findAllTopic: FindAllTopicInput;
};


export type QueryGetAllUsersByRoomIdArgs = {
  roomId: Scalars['Float']['input'];
};


export type QueryGetAuctionArgs = {
  auctionId: Scalars['Int']['input'];
};


export type QueryGetAuctionStatusByIdArgs = {
  statusId: Scalars['Int']['input'];
};


export type QueryGetAuctionsArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetBidByIdArgs = {
  bidId: Scalars['Int']['input'];
};


export type QueryGetBidsByAuctionIdArgs = {
  auctionId: Scalars['Int']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BidInput>;
};


export type QueryGetInviteLinkArgs = {
  roomId: Scalars['Float']['input'];
};


export type QueryGetMessageTiketByIdArgs = {
  tiketId: Scalars['Int']['input'];
};


export type QueryGetMyCreatedAuctionsArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetMyWonAuctionsArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetNewsByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetOneMyPayOperationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetRoomByIdArgs = {
  roomId: Scalars['Float']['input'];
};


export type QueryGetTopicByIdArgs = {
  topicId: Scalars['Int']['input'];
};

export type ReferralUser = {
  __typename?: 'ReferralUser';
  createdAt: Scalars['DateTime']['output'];
  cuid: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  username: Scalars['String']['output'];
};

export type Room = {
  __typename?: 'Room';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isPrivate: Scalars['Boolean']['output'];
  owner: UserPublic;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type RoomCreateInput = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type RoomResponse = {
  __typename?: 'RoomResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isPrivate?: Maybe<Scalars['Boolean']['output']>;
  messages: Array<Messages>;
  owner?: Maybe<UserPublic>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RoomUpdateInput = {
  description: Scalars['String']['input'];
  ownerId: Scalars['Int']['input'];
  private: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};

export type SignInInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignResponse = {
  __typename?: 'SignResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  user: User;
};

export type SignUpInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  referrerUserId?: InputMaybe<Scalars['Int']['input']>;
  username: Scalars['String']['input'];
};

export type Status = {
  __typename?: 'Status';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  newMessage: Message;
  notification: Notification;
};


export type SubscriptionNewMessageArgs = {
  roomId: Scalars['Int']['input'];
};


export type SubscriptionNotificationArgs = {
  userId: Scalars['Float']['input'];
};

export type Token = {
  __typename?: 'Token';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  points: Scalars['Int']['output'];
  price: Scalars['Float']['output'];
  sortOrder: Scalars['Int']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type TokenHistory = {
  __typename?: 'TokenHistory';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  tokenId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Int']['output'];
};

export type TokenHistoryInput = {
  id: Scalars['Int']['input'];
  points: Scalars['Int']['input'];
  price: Scalars['Float']['input'];
  tokenId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};

export type TokenInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  points: Scalars['Int']['input'];
  price: Scalars['Float']['input'];
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TopicTiket = {
  __typename?: 'TopicTiket';
  adminId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  process: Scalars['String']['output'];
  title: Scalars['String']['output'];
  user: UserPublic;
  whoIsDoing?: Maybe<UserPublic>;
};

export type UpdateAddressInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  index?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateAuctionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  finishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  startedAt: Scalars['DateTime']['input'];
  startingPrice?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

export type UpdateBidInput = {
  auctionId?: InputMaybe<Scalars['Int']['input']>;
  bitPrice?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateHistoryInput = {
  id: Scalars['Int']['input'];
  points: Scalars['Int']['input'];
  price: Scalars['Float']['input'];
  tokenId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};

export type UpdateMessageTiketInput = {
  fromWhomId?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  toWhomId?: InputMaybe<Scalars['Int']['input']>;
  topicId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdatePaymentInput = {
  cvv?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  month?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTokenInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  points: Scalars['Int']['input'];
  price: Scalars['Float']['input'];
  sortOrder: Scalars['Float']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTopicTiketInput = {
  message?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  patronymic?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  balance: Scalars['Int']['output'];
  confirmationCode?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstname?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  instagram?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  patronymic?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UserMessages = {
  roomId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserPublic = {
  __typename?: 'UserPublic';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  balance: Scalars['Int']['output'];
  firstname?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  lastname?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type GetAuctionsQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAuctionsQuery = { __typename?: 'Query', getAuctions: Array<{ __typename?: 'Auction', id: number, title: string, description: string, startingPrice: number, sortOrder: number, finishedAt: any, startedAt: any, createdAt: any, updatedAt: any, creator: { __typename?: 'UserPublic', id: number, username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null, balance: number }, winner?: { __typename?: 'UserPublic', id: number, username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null, balance: number } | null, status: { __typename?: 'Status', id: number, name: string }, bids?: Array<{ __typename?: 'Bid', id: number, userId: number, auctionId: number, bitPrice: number, createdAt: any, updatedAt: any, user?: { __typename?: 'UserPublic', id: number, username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null, balance: number } | null }> | null }> };

export type CreateMyBidMutationVariables = Exact<{
  input: CreateBidInput;
}>;


export type CreateMyBidMutation = { __typename?: 'Mutation', createMyBid: { __typename?: 'Bid', id: number, userId: number, auctionId: number, bitPrice: number, createdAt: any, updatedAt: any, user?: { __typename?: 'UserPublic', username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null } | null } };

export type GetBidsByAuctionIdQueryVariables = Exact<{
  auctionId: Scalars['Int']['input'];
}>;


export type GetBidsByAuctionIdQuery = { __typename?: 'Query', getBidsByAuctionId: Array<{ __typename?: 'Bid', id: number, userId: number, auctionId: number, bitPrice: number, createdAt: any, updatedAt: any, user?: { __typename?: 'UserPublic', username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null } | null }> };

export type GetAuctionQueryVariables = Exact<{
  auctionId: Scalars['Int']['input'];
}>;


export type GetAuctionQuery = { __typename?: 'Query', getAuction: { __typename?: 'Auction', id: number, title: string, description: string, startingPrice: number, sortOrder: number, finishedAt: any, startedAt: any, createdAt: any, updatedAt: any, creator: { __typename?: 'UserPublic', username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null }, winner?: { __typename?: 'UserPublic', username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null } | null, status: { __typename?: 'Status', id: number, name: string }, bids?: Array<{ __typename?: 'Bid', id: number, userId: number, auctionId: number, bitPrice: number, createdAt: any, updatedAt: any, user?: { __typename?: 'UserPublic', username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null } | null }> | null } };

export type CreateMyAuctionMutationVariables = Exact<{
  input: CreateAuctionInput;
}>;


export type CreateMyAuctionMutation = { __typename?: 'Mutation', createMyAuction: { __typename?: 'Auction', id: number, title: string, startingPrice: number, description: string, sortOrder: number, finishedAt: any, startedAt: any, createdAt: any, updatedAt: any, creator: { __typename?: 'UserPublic', username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null }, winner?: { __typename?: 'UserPublic', username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null } | null, status: { __typename?: 'Status', id: number, name: string }, bids?: Array<{ __typename?: 'Bid', id: number, userId: number, bitPrice: number, createdAt: any, auctionId: number, updatedAt: any, user?: { __typename?: 'UserPublic', username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null } | null }> | null } };

export type GetMyWonAuctionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyWonAuctionsQuery = { __typename?: 'Query', getMyWonAuctions: Array<{ __typename?: 'Auction', id: number, title: string, description: string, startingPrice: number, sortOrder: number, finishedAt: any, startedAt: any, createdAt: any, updatedAt: any, creator: { __typename?: 'UserPublic', id: number, username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null, balance: number }, winner?: { __typename?: 'UserPublic', id: number, username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null, balance: number } | null, status: { __typename?: 'Status', id: number, name: string }, bids?: Array<{ __typename?: 'Bid', id: number, userId: number, auctionId: number, bitPrice: number, createdAt: any, updatedAt: any, user?: { __typename?: 'UserPublic', id: number, username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null, balance: number } | null }> | null }> };

export type LogoutMutationVariables = Exact<{
  logoutId: Scalars['Int']['input'];
}>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'LogoutResponse', loggedOut: boolean } };

export type SigninMutationVariables = Exact<{
  signInInput: SignInInput;
}>;


export type SigninMutation = { __typename?: 'Mutation', signin: { __typename?: 'SignResponse', refreshToken: string, accessToken: string, user: { __typename?: 'User', username: string, id: number, email: string } } };

export type SignupMutationVariables = Exact<{
  signUpInput: SignUpInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'SignResponse', refreshToken: string, accessToken: string, user: { __typename?: 'User', username: string, id: number, email: string } } };

export type GetAllMyRoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMyRoomsQuery = { __typename?: 'Query', getAllMyRooms: Array<{ __typename?: 'RoomResponse', id?: number | null, title?: string | null, description?: string | null, isPrivate?: boolean | null, createdAt?: any | null, updatedAt?: any | null, owner?: { __typename?: 'UserPublic', id: number, username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null, balance: number } | null, messages: Array<{ __typename?: 'Messages', content: string }> }> };

export type ItemsQueryVariables = Exact<{
  input: UserMessages;
}>;


export type ItemsQuery = { __typename?: 'Query', getAllMessagesByRoomId: { __typename?: 'ItemMessages', totalCount: number, items: Array<{ __typename?: 'Message', id: number, content: string, createdAt: any, updatedAt: any, user: { __typename?: 'UserPublic', id: number, username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null, balance: number }, room: { __typename?: 'Room', id: number, title: string, description?: string | null, isPrivate: boolean, createdAt: any, updatedAt: any, owner: { __typename?: 'UserPublic', id: number, username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null, balance: number } } }> } };

export type GetAllUsersByRoomIdQueryVariables = Exact<{
  roomId: Scalars['Float']['input'];
}>;


export type GetAllUsersByRoomIdQuery = { __typename?: 'Query', getAllUsersByRoomId: Array<{ __typename?: 'UserPublic', id: number, username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null, balance: number }> };

export type SendMessageMutationVariables = Exact<{
  newMessage: NewMessageInput;
}>;


export type SendMessageMutation = { __typename?: 'Mutation', sendMessage?: { __typename?: 'Message', id: number, content: string, createdAt: any, updatedAt: any, user: { __typename?: 'UserPublic', id: number, username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null, balance: number }, room: { __typename?: 'Room', id: number, title: string, description?: string | null, isPrivate: boolean, createdAt: any, updatedAt: any, owner: { __typename?: 'UserPublic', id: number, username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null, balance: number } } } | null };

export type CreateMyRoomMutationVariables = Exact<{
  input: RoomCreateInput;
}>;


export type CreateMyRoomMutation = { __typename?: 'Mutation', createMyRoom?: { __typename?: 'Room', id: number, title: string, description?: string | null, isPrivate: boolean, createdAt: any, updatedAt: any, owner: { __typename?: 'UserPublic', id: number, username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null, balance: number } } | null };

export type RemoveMessageMutationVariables = Exact<{
  removeMessageId: Scalars['Float']['input'];
}>;


export type RemoveMessageMutation = { __typename?: 'Mutation', removeMessage?: { __typename?: 'Message', id: number, content: string, createdAt: any, updatedAt: any, user: { __typename?: 'UserPublic', id: number, username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null, balance: number }, room: { __typename?: 'Room', id: number, title: string, description?: string | null, isPrivate: boolean, createdAt: any, updatedAt: any, owner: { __typename?: 'UserPublic', id: number, username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null, balance: number } } } | null };

export type UpdateMessageMutationVariables = Exact<{
  input: MessageUpdateInput;
}>;


export type UpdateMessageMutation = { __typename?: 'Mutation', updateMessage?: { __typename?: 'Message', content: string, createdAt: any, id: number, updatedAt: any, room: { __typename?: 'Room', createdAt: any, description?: string | null, id: number, isPrivate: boolean, title: string, updatedAt: any, owner: { __typename?: 'UserPublic', id: number, username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null, balance: number } }, user: { __typename?: 'UserPublic', id: number, username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null, balance: number } } | null };

export type GetRoomByIdQueryVariables = Exact<{
  roomId: Scalars['Float']['input'];
}>;


export type GetRoomByIdQuery = { __typename?: 'Query', getRoomById: { __typename?: 'Room', id: number, title: string, description?: string | null, isPrivate: boolean, createdAt: any, updatedAt: any, owner: { __typename?: 'UserPublic', id: number, username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null, balance: number } } };

export type JoinToRoomMutationVariables = Exact<{
  roomId: Scalars['Float']['input'];
}>;


export type JoinToRoomMutation = { __typename?: 'Mutation', joinToRoom: { __typename?: 'UserPublic', username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null } };

export type LeaveFromRoomMutationVariables = Exact<{
  roomId: Scalars['Float']['input'];
}>;


export type LeaveFromRoomMutation = { __typename?: 'Mutation', leaveFromRoom: { __typename?: 'UserPublic', avatarUrl?: string | null, lastname?: string | null, firstname?: string | null, username: string } };

export type AddUserInRoomMutationVariables = Exact<{
  addUser: AddUserInput;
}>;


export type AddUserInRoomMutation = { __typename?: 'Mutation', addUserInRoom: { __typename?: 'UserPublic', username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null } };

export type RemoveMyRoomMutationVariables = Exact<{
  roomId: Scalars['Float']['input'];
}>;


export type RemoveMyRoomMutation = { __typename?: 'Mutation', removeMyRoom?: { __typename?: 'Room', id: number, title: string, description?: string | null, isPrivate: boolean, createdAt: any, updatedAt: any, owner: { __typename?: 'UserPublic', id: number, username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null, balance: number } } | null };

export type NewMessageSubscriptionVariables = Exact<{
  roomId: Scalars['Int']['input'];
}>;


export type NewMessageSubscription = { __typename?: 'Subscription', newMessage: { __typename?: 'Message', id: number, content: string, createdAt: any, updatedAt: any, user: { __typename?: 'UserPublic', id: number, username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null, balance: number }, room: { __typename?: 'Room', id: number, title: string, description?: string | null, isPrivate: boolean, createdAt: any, updatedAt: any, owner: { __typename?: 'UserPublic', id: number, username: string, firstname?: string | null, lastname?: string | null, avatarUrl?: string | null, balance: number } } } };

export type GetAllNewsQueryVariables = Exact<{
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllNewsQuery = { __typename?: 'Query', news: { __typename?: 'ItemNews', totalCount: number, items: Array<{ __typename?: 'News', id: number, title: string, updatedAt: any, userId: number, text?: string | null, date: any, images?: string | null }> } };

export type NotificationSubscriptionVariables = Exact<{
  userId: Scalars['Float']['input'];
}>;


export type NotificationSubscription = { __typename?: 'Subscription', notification: { __typename?: 'Notification', id: number, auctionId: number, userId: number, message: string, isRead: boolean, typeNotifi: string } };

export type CreateTokenMutationVariables = Exact<{
  data: CreateTokenInput;
}>;


export type CreateTokenMutation = { __typename?: 'Mutation', createToken?: { __typename?: 'Token', updatedAt: any, title?: string | null, sortOrder: number, points: number, price: number, id: number, description?: string | null, createdAt: any } | null };

export type GetTokenByIdMutationVariables = Exact<{
  getTokenByIdId: Scalars['Int']['input'];
}>;


export type GetTokenByIdMutation = { __typename?: 'Mutation', getTokenById?: { __typename?: 'Token', createdAt: any, description?: string | null, points: number, id: number, price: number, updatedAt: any, title?: string | null, sortOrder: number } | null };

export type UpdateTokenMutationVariables = Exact<{
  updateTokenId: Scalars['Int']['input'];
  data: UpdateTokenInput;
}>;


export type UpdateTokenMutation = { __typename?: 'Mutation', updateToken?: { __typename?: 'Token', createdAt: any, description?: string | null, id: number, points: number, price: number, sortOrder: number, title?: string | null, updatedAt: any } | null };

export type PayOperationMutationVariables = Exact<{
  createPayInput: CreatePayInput;
}>;


export type PayOperationMutation = { __typename?: 'Mutation', payOperation: { __typename?: 'Pay', id: number, user_id: number, operation: string, typeOperation: string, amount: number, message: string, createAt: any } };

export type GetAllMyPayOperationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMyPayOperationQuery = { __typename?: 'Query', getAllMyPayOperation: Array<{ __typename?: 'Pay', id: number, user_id: number, operation: string, typeOperation: string, amount: number, message: string, createAt: any }> };

export type GetOneMyPayOperationQueryVariables = Exact<{
  getOneMyPayOperationId: Scalars['Int']['input'];
}>;


export type GetOneMyPayOperationQuery = { __typename?: 'Query', getOneMyPayOperation: { __typename?: 'Pay', id: number, user_id: number, operation: string, typeOperation: string, amount: number, message: string, createAt: any } };

export type GetMyReferralsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyReferralsQuery = { __typename?: 'Query', getMyReferrals: Array<{ __typename?: 'ReferralUser', id: number, cuid: string, email: string, username: string, createdAt: any }> };

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { __typename?: 'Query', getProfile: { __typename?: 'User', id: number, username: string, email: string, firstname?: string | null, phone?: string | null, lastname?: string | null, patronymic?: string | null, instagram?: string | null, confirmationCode?: string | null, avatarUrl?: string | null, balance: number, createdAt: any, updatedAt?: any | null } };

export type GetUserAddressQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserAddressQuery = { __typename?: 'Query', getUserAddress: { __typename?: 'Address', country?: string | null, city?: string | null, address?: string | null, index?: string | null, createdAt: any, updatedAt: any } };

export type GetUserPaymentQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserPaymentQuery = { __typename?: 'Query', getUserPayment: { __typename?: 'Payment', firstname?: string | null, lastname?: string | null, patronymic?: string | null, number?: string | null, cvv?: string | null, month?: string | null, year?: string | null, createdAt: any, updatedAt: any } };

export type UpdateUserAddressMutationVariables = Exact<{
  input: UpdateAddressInput;
}>;


export type UpdateUserAddressMutation = { __typename?: 'Mutation', updateUserAddress: { __typename?: 'Address', country?: string | null, city?: string | null, address?: string | null, index?: string | null, createdAt: any, updatedAt: any } };

export type EditProfileMutationVariables = Exact<{
  updateUserInput: UpdateUserInput;
}>;


export type EditProfileMutation = { __typename?: 'Mutation', editProfile: { __typename?: 'User', id: number, username: string, email: string, firstname?: string | null, phone?: string | null, lastname?: string | null, patronymic?: string | null, instagram?: string | null, createdAt: any, updatedAt?: any | null } };

export type UpdateUserPaymentMutationVariables = Exact<{
  input: UpdatePaymentInput;
}>;


export type UpdateUserPaymentMutation = { __typename?: 'Mutation', updateUserPayment: { __typename?: 'Payment', firstname?: string | null, lastname?: string | null, patronymic?: string | null, number?: string | null, cvv?: string | null, month?: string | null, year?: string | null, createdAt: any, updatedAt: any } };


export const GetAuctionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAuctions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAuctions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortOrder"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"startingPrice"}},{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"winner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"finishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"bids"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"auctionId"}},{"kind":"Field","name":{"kind":"Name","value":"bitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAuctionsQuery, GetAuctionsQueryVariables>;
export const CreateMyBidDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMyBid"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateBidInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMyBid"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"auctionId"}},{"kind":"Field","name":{"kind":"Name","value":"bitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}}]}}]}}]} as unknown as DocumentNode<CreateMyBidMutation, CreateMyBidMutationVariables>;
export const GetBidsByAuctionIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBidsByAuctionId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"auctionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getBidsByAuctionId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"auctionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"auctionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"auctionId"}},{"kind":"Field","name":{"kind":"Name","value":"bitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}}]}}]}}]} as unknown as DocumentNode<GetBidsByAuctionIdQuery, GetBidsByAuctionIdQueryVariables>;
export const GetAuctionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAuction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"auctionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAuction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"auctionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"auctionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"startingPrice"}},{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"winner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"finishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"bids"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"auctionId"}},{"kind":"Field","name":{"kind":"Name","value":"bitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAuctionQuery, GetAuctionQueryVariables>;
export const CreateMyAuctionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMyAuction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAuctionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMyAuction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"startingPrice"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"winner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"finishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"bids"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"bitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"auctionId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateMyAuctionMutation, CreateMyAuctionMutationVariables>;
export const GetMyWonAuctionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyWonAuctions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMyWonAuctions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"startingPrice"}},{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"winner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"finishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"bids"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"auctionId"}},{"kind":"Field","name":{"kind":"Name","value":"bitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMyWonAuctionsQuery, GetMyWonAuctionsQueryVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"logoutId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"logoutId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loggedOut"}}]}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const SigninDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Signin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signInInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignInInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signInInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signInInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<SigninMutation, SigninMutationVariables>;
export const SignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Signup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signUpInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signUpInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signUpInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<SignupMutation, SignupMutationVariables>;
export const GetAllMyRoomsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllMyRooms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllMyRooms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllMyRoomsQuery, GetAllMyRoomsQueryVariables>;
export const ItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Items"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserMessages"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllMessagesByRoomId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"room"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<ItemsQuery, ItemsQueryVariables>;
export const GetAllUsersByRoomIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllUsersByRoomId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roomId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllUsersByRoomId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"roomId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roomId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}}]}}]} as unknown as DocumentNode<GetAllUsersByRoomIdQuery, GetAllUsersByRoomIdQueryVariables>;
export const SendMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newMessage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewMessageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newMessage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newMessage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"room"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<SendMessageMutation, SendMessageMutationVariables>;
export const CreateMyRoomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMyRoom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RoomCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMyRoom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateMyRoomMutation, CreateMyRoomMutationVariables>;
export const RemoveMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeMessageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeMessageId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"room"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<RemoveMessageMutation, RemoveMessageMutationVariables>;
export const UpdateMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MessageUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"room"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateMessageMutation, UpdateMessageMutationVariables>;
export const GetRoomByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRoomById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roomId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRoomById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"roomId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roomId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetRoomByIdQuery, GetRoomByIdQueryVariables>;
export const JoinToRoomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"JoinToRoom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roomId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"joinToRoom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"roomId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roomId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}}]}}]} as unknown as DocumentNode<JoinToRoomMutation, JoinToRoomMutationVariables>;
export const LeaveFromRoomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LeaveFromRoom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roomId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leaveFromRoom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"roomId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roomId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<LeaveFromRoomMutation, LeaveFromRoomMutationVariables>;
export const AddUserInRoomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddUserInRoom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addUser"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addUserInRoom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addUser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addUser"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}}]}}]} as unknown as DocumentNode<AddUserInRoomMutation, AddUserInRoomMutationVariables>;
export const RemoveMyRoomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveMyRoom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roomId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeMyRoom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"roomId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roomId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<RemoveMyRoomMutation, RemoveMyRoomMutationVariables>;
export const NewMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"NewMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roomId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"roomId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roomId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"room"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<NewMessageSubscription, NewMessageSubscriptionVariables>;
export const GetAllNewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllNews"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"news"},"name":{"kind":"Name","value":"getAllNews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortOrder"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","alias":{"kind":"Name","value":"date"},"name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","alias":{"kind":"Name","value":"images"},"name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllNewsQuery, GetAllNewsQueryVariables>;
export const NotificationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"Notification"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notification"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"auctionId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"isRead"}},{"kind":"Field","name":{"kind":"Name","value":"typeNotifi"}}]}}]}}]} as unknown as DocumentNode<NotificationSubscription, NotificationSubscriptionVariables>;
export const CreateTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTokenInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"sortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<CreateTokenMutation, CreateTokenMutationVariables>;
export const GetTokenByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GetTokenById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getTokenByIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTokenById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getTokenByIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"sortOrder"}}]}}]}}]} as unknown as DocumentNode<GetTokenByIdMutation, GetTokenByIdMutationVariables>;
export const UpdateTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateTokenId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTokenInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateTokenId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"sortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateTokenMutation, UpdateTokenMutationVariables>;
export const PayOperationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PayOperation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createPayInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePayInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payOperation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createPayInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createPayInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"operation"}},{"kind":"Field","name":{"kind":"Name","value":"typeOperation"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"createAt"}}]}}]}}]} as unknown as DocumentNode<PayOperationMutation, PayOperationMutationVariables>;
export const GetAllMyPayOperationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllMyPayOperation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllMyPayOperation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"operation"}},{"kind":"Field","name":{"kind":"Name","value":"typeOperation"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"createAt"}}]}}]}}]} as unknown as DocumentNode<GetAllMyPayOperationQuery, GetAllMyPayOperationQueryVariables>;
export const GetOneMyPayOperationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOneMyPayOperation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getOneMyPayOperationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getOneMyPayOperation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getOneMyPayOperationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"operation"}},{"kind":"Field","name":{"kind":"Name","value":"typeOperation"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"createAt"}}]}}]}}]} as unknown as DocumentNode<GetOneMyPayOperationQuery, GetOneMyPayOperationQueryVariables>;
export const GetMyReferralsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyReferrals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMyReferrals"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cuid"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetMyReferralsQuery, GetMyReferralsQueryVariables>;
export const GetProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"patronymic"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"confirmationCode"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetProfileQuery, GetProfileQueryVariables>;
export const GetUserAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetUserAddressQuery, GetUserAddressQueryVariables>;
export const GetUserPaymentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserPayment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserPayment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"patronymic"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"cvv"}},{"kind":"Field","name":{"kind":"Name","value":"month"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetUserPaymentQuery, GetUserPaymentQueryVariables>;
export const UpdateUserAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateAddressInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUserAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateUserAddressMutation, UpdateUserAddressMutationVariables>;
export const EditProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"patronymic"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<EditProfileMutation, EditProfileMutationVariables>;
export const UpdateUserPaymentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserPayment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePaymentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUserPayment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"patronymic"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"cvv"}},{"kind":"Field","name":{"kind":"Name","value":"month"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateUserPaymentMutation, UpdateUserPaymentMutationVariables>;