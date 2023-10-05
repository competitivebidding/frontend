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



export const MessageItem = ({ message, onContextMenu }: { message: IMessage, onContextMenu: React.MouseEventHandler<HTMLDivElement> | undefined }) => {
  const { lsValue } = useLocalStorage<IUser>('user');
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ top: 0, left: 0 });
  const [removeMessage] = useMutation(REMOVE_MESSAGE);

  const messageRef = useRef<HTMLDivElement | null>(null);





  // const handleClick = (e: MouseEvent) => {
  //   if (isContextMenuVisible && (e.button === 0 || e.button === 2)) {
  //     setIsContextMenuVisible(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClick);
  //
  //   return () => {
  //     document.removeEventListener('mousedown', handleClick);
  //   };
  // }, [isContextMenuVisible]);


  return (
    <><div
        onContextMenu={onContextMenu}
      className={`chat__message ${message.userId === lsValue?.id ? 'your' : 'answer'}`}
      ref={messageRef}

    >
      <div className="content">
        {message.content}
        <div className="time">{toTime(message.createdAt)}</div>
        <div className='apx'>
          {message.userId === lsValue?.id ? <img src={apxR} alt="" /> : <img src={apxL} alt="" />}
        </div>
      </div>
    </div>

    </>
  );
};
