import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import apxR from '@assets/Chat/apx-r.svg';
import apxL from '@assets/Chat/apx-l.svg';
import { toTime } from '@shared/utils/timeHelpers';
import { useLocalStorage } from '@shared/lib/useLocalStorage';
import { IUser } from 'src/entities/messages/Messages';
import { IMessage } from 'src/features/chat-messages/ChatMessages';
import { useMutation } from '@apollo/client';
import { REMOVE_MESSAGE } from '@/shared/schemas/messages/messages';

import './MessageItem.scss';

export const MessageItem = ({ message, onContextMenu }: { message: any, onContextMenu: React.MouseEventHandler<HTMLDivElement> | undefined }) => {
  const { lsValue } = useLocalStorage<IUser>('user');
  const messageRef = useRef<HTMLDivElement | null>(null);


  return (
    <><div
        onContextMenu={onContextMenu}
      className={`chat__message ${message.user.id === lsValue?.id ? 'your' : 'answer'}`}
      ref={messageRef} >
      <div className="content">
        {message.content}
        <div className="time">{toTime(message.createdAt)}</div>
        <div className='apx'>
          {message.userId === lsValue?.id ? <img src={apxR} alt="logo" /> : <img src={apxL} alt="logo" />}
        </div>
      </div>
    </div>
    </>
  );
};
