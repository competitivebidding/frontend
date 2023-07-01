/* eslint-disable */
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

export type AuctionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdUserId?: InputMaybe<Scalars['Int']['input']>;
  finishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  startedAt?: InputMaybe<Scalars['DateTime']['input']>;
  statusId?: InputMaybe<Scalars['Int']['input']>;
  wonUserId?: InputMaybe<Scalars['Int']['input']>;
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

export type CreateTokenInput = {
  description: Scalars['String']['input'];
  points: Scalars['Int']['input'];
  price: Scalars['Float']['input'];
  sortOrder: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type ForgotPasswordDto = {
  __typename?: 'ForgotPasswordDto';
  email: Scalars['String']['output'];
};

export type ItemNews = {
  __typename?: 'ItemNews';
  items: Array<News>;
  totalCount: Scalars['Int']['output'];
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
  roomId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addUserInRoom: UserPublic;
  changePassword: ChangePasswordDto;
  createMyAuction: Auction;
  createMyBid: Bid;
  createMyRoom?: Maybe<Room>;
  createMyTokenHistory?: Maybe<TokenHistory>;
  createNews: News;
  createToken?: Maybe<Token>;
  deleteMyAuction: Scalars['Boolean']['output'];
  deleteMyBid: Scalars['Boolean']['output'];
  deleteNews: Scalars['Boolean']['output'];
  deleteToken: Scalars['Boolean']['output'];
  editProfile: User;
  forgotPassword: ForgotPasswordDto;
  getMyTokenHistories?: Maybe<Array<TokenHistory>>;
  getNewTokens: NewTokensResponse;
  getTokenById?: Maybe<Token>;
  joinToRoom: UserPublic;
  leaveFromRoom: UserPublic;
  logout: LogoutResponse;
  removeMessage?: Maybe<Message>;
  removeMyRoom?: Maybe<Room>;
  removeUserInRoom: UserPublic;
  sendMessage?: Maybe<Message>;
  signin: SignResponse;
  signup: SignResponse;
  updateMessage?: Maybe<Message>;
  updateMyAuction: Auction;
  updateMyBid: Bid;
  updateMyRoom?: Maybe<Room>;
  updateMyTokenHistory?: Maybe<TokenHistory>;
  updateNews?: Maybe<News>;
  updateToken?: Maybe<Token>;
  updateUserAddress: Address;
  updateUserPayment: Payment;
};


export type MutationAddUserInRoomArgs = {
  addUser: AddUserInput;
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


export type MutationGetMyTokenHistoriesArgs = {
  input: TokenHistoryInput;
};


export type MutationGetTokenByIdArgs = {
  id: Scalars['Int']['input'];
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


export type MutationRemoveMessageArgs = {
  id: Scalars['Float']['input'];
};


export type MutationRemoveMyRoomArgs = {
  roomId: Scalars['Float']['input'];
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
  getAllMessagesByRoomId: Array<Message>;
  getAllMyRooms: Array<Room>;
  getAllNews: ItemNews;
  getAllRooms: Array<Room>;
  getAllUsersByRoomId: Array<UserPublic>;
  getAuction: Auction;
  getAuctionStatusById: Status;
  getAuctions: Array<Auction>;
  getBidById: Bid;
  getBidsByAuctionId: Array<Bid>;
  getMyCreatedAuctions: Array<Auction>;
  getMyReferrals: Array<ReferralUser>;
  getMyWonAuctions: Array<Auction>;
  getNewsById: News;
  getProfile: User;
  getRoomById: Room;
  getRooms: Array<Room>;
  getUserAddress: Address;
  getUserPayment: Payment;
  secret: Scalars['String']['output'];
};


export type QueryGetAllMessagesByRoomIdArgs = {
  userMessage: UserMessages;
};


export type QueryGetAllNewsArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
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
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AuctionInput>;
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


export type QueryGetMyCreatedAuctionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetMyWonAuctionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetNewsByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetRoomByIdArgs = {
  roomId: Scalars['Float']['input'];
};


export type QueryGetRoomsArgs = {
  input: RoomFindInput;
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
  ownerId: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type RoomCreateInput = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type RoomFindInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RoomUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
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
};


export type SubscriptionNewMessageArgs = {
  roomId: Scalars['Int']['input'];
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
  firstname?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};
