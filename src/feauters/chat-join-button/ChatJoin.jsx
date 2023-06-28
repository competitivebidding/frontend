import React from 'react';
import {useMutation, useQuery} from "@apollo/client";
import {GET_ALL_USERS_BY_ROOM_ID, JOIN_ROOM} from "../../shared/schemas/messages/messages";
import './ChatJoin.scss';

export const ChatJoin = ({roomId}) => {
  const [joinRoom, { }] = useMutation(JOIN_ROOM)
  const { data, refetch} = useQuery(GET_ALL_USERS_BY_ROOM_ID, {
    variables: {
      roomId
    }
  })
  const joinGroup = () => {
    joinRoom({ variables: { roomId } }).then(refetch)
  }

  return (
    <>
      <button className='join__room' onClick={joinGroup}>Join to Room</button>
    </>
  );
}


