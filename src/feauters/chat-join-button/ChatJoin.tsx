import React, {FC} from 'react';
import {useMutation, useQuery} from "@apollo/client";
import {GET_ALL_USERS_BY_ROOM_ID, JOIN_ROOM} from "../../shared/schemas/messages/messages";
import './ChatJoin.scss';

interface IChatJoinProps {
  roomId: number
}
export const ChatJoin: FC<IChatJoinProps> = ({roomId}) => {
  const [joinRoom] = useMutation(JOIN_ROOM, {refetchQueries: [GET_ALL_USERS_BY_ROOM_ID]})
  const joinGroup = () => {
    joinRoom({ variables: { roomId } })
  }

  return (
    <>
      <button className='join__room' onClick={joinGroup}>Join to Room</button>
    </>
  );
}


