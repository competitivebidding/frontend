import React from 'react';
import {useMutation} from "@apollo/client";
import { JOIN_ROOM } from "../../../components/server/messages";
export const ChatJoin = ({roomId}) => {
  const [joinRoom, { }] = useMutation(JOIN_ROOM)
  const joinGroup = () => {
    joinRoom({ variables: { roomId } }).then(e => console.log(e))
  }

  return (
    <>
      <button className='join__room' onClick={joinGroup}>Join to Room</button>
    </>
  );
}


