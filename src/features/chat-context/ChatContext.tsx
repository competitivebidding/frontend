import React, { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery, useSubscription } from '@apollo/client';
import { REMOVE_MESSAGE } from "@shared/schemas/messages/messages";


export interface IMessage {
  userId: number
  id: number
  content: string
  createdAt: string
}

interface contextMenuPosition {
  top: number,
  left: number
}

export const ChatContext = ({
  isContextMenuVisible,
  setIsContextMenuVisible,
  contextMenuPosition,
  selectedMessageId,
  setGroupMessages,
}: {
  isContextMenuVisible: boolean;
  setIsContextMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
  contextMenuPosition: contextMenuPosition;
  selectedMessageId: number | null;
  setGroupMessages: React.Dispatch<React.SetStateAction<IMessage[] | undefined>>;
}) => {
  const [removeMessage] = useMutation(REMOVE_MESSAGE);


  const handleDeleteClick = () => {
    console.log(selectedMessageId);
    console.log('Message deleted');
    if (selectedMessageId !== null) {
      removeMessage({ variables: { removeMessageId: selectedMessageId } })
        .then(() => {
          setIsContextMenuVisible(false);
          setGroupMessages((prevMessages) => {
            if (prevMessages) {
              return prevMessages.filter((message) => message.id !== selectedMessageId);
            }
            return prevMessages;
          });

          // if (ref.current) {
          //   setScrollPosition(ref.current.scrollTop);
          // }
        })
        .catch((error) => {
          console.error('Ошибка при удалении сообщения:', error);
        });
    }
  };

  return (

    <div className={`context-menu ${isContextMenuVisible ? 'open' : ''}`} style={{ top: contextMenuPosition.top, left: contextMenuPosition.left }}>
      <div onClick={handleDeleteClick}>Удалить</div>
      <div>Изменить</div>
    </div>
  )
}