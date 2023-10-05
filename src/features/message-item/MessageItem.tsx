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

export const MessageItem = ({ message }: { message: IMessage }) => {
  const { lsValue } = useLocalStorage<IUser>('user');
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ top: 0, left: 0 });
  const [removeMessage] = useMutation(REMOVE_MESSAGE);

  const messageRef = useRef<HTMLDivElement | null>(null);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('OPen Context')
    if (message.id) {
      setIsContextMenuVisible(true);
      const boundingBox = messageRef.current?.getBoundingClientRect();
      if (boundingBox) {
        setContextMenuPosition({
          top: e.clientY,
          left: e.clientX - 150,
        });
      }
    }
  };

  const handleDeleteClick = () => {
    console.log('asdsa');
    if (message.id) {
      removeMessage({ variables: { removeMessageId: message.id } })
        .then(() => {
          setIsContextMenuVisible(false);
        })
        .catch((error) => {
          console.error('Ошибка при удалении сообщения:', error);
        });
    }
  };

  const handleClick = (e: MouseEvent) => {
    if (isContextMenuVisible && (e.button === 0 || e.button === 2)) {
      setIsContextMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [isContextMenuVisible]);

  const contextMenuClassName = `context-menu ${isContextMenuVisible ? 'open' : ''}`;

  return (
    <div
      className={`chat__message ${message.userId === lsValue?.id ? 'your' : 'answer'}`}
      ref={messageRef}
      onContextMenu={handleContextMenu}
    >
      <div className="content">
        {message.content}
        <div className="time">{toTime(message.createdAt)}</div>
        <div className='apx'>
          {message.userId === lsValue?.id ? <img src={apxR} alt="" /> : <img src={apxL} alt="" />}
        </div>
      </div>

      <div className={contextMenuClassName} style={{ top: contextMenuPosition.top, left: contextMenuPosition.left }}>
        <div onClick={handleDeleteClick}>Удалить</div>
        <div>Изменить</div>
      </div>
    </div>
  );
};
