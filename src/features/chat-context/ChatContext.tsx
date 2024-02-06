import React, { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery, useSubscription } from '@apollo/client';
import { REMOVE_MESSAGE } from "@shared/schemas/messages/messages";
import { UPDATE_MESSAGE } from "@shared/schemas/messages/messages";
import { AppModal } from '@shared/ui/modal/AppModal'
import { toTime } from '@shared/utils/timeHelpers';
import iconClose from '@assets/Chat/iconClose.svg'
import iconTickMark from '@assets/Chat/iconTickMark.svg'
import { useTranslation } from 'react-i18next'

import styles from './ChatContext.module.scss'

export interface IMessage {
  userId: number;
  id: number;
  content: string;
  createdAt: string;
}

interface contextMenuPosition {
  top: number;
  left: number;
}

export const ChatContext = ({
  isContextMenuVisible,
  setIsContextMenuVisible,
  contextMenuPosition,
  selectedMessageId,
  setGroupMessages,
  groupMessages,
  isModalMenuVisible,
  setIsModalMenuVisible
}: {
  isContextMenuVisible: boolean;
  setIsContextMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
  contextMenuPosition: contextMenuPosition;
  selectedMessageId: number | null;
  setGroupMessages: React.Dispatch<React.SetStateAction<any>>;
  groupMessages: IMessage[] | undefined;
  isModalMenuVisible: boolean;
  setIsModalMenuVisible: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [removeMessage] = useMutation(REMOVE_MESSAGE);
  const [updateMessage] = useMutation(UPDATE_MESSAGE);

  const [updatedMessageContent, setUpdatedMessageContent] = useState("");
  const [updatedMessageContentTime, setUpdatedMessageContentTime] = useState("");
  const inputMessageRef = useRef<HTMLInputElement | null>(null);;
  const [initialMessageContent, setInitialMessageContent] = useState("");
  const { t } = useTranslation('messagesPage')


  useEffect(() => {
    if (isModalMenuVisible) {
      if (inputMessageRef.current) {
        inputMessageRef.current.focus();
      }
    }
  }, [isModalMenuVisible]);

  const handleDeleteClick = () => {
    console.log(selectedMessageId);
    console.log('Message deleted');
    if (selectedMessageId !== null) {
      removeMessage({ variables: { removeMessageId: selectedMessageId } })
        .then(() => {
          // setIsContextMenuVisible(false);
          setGroupMessages((prevMessages: any[]) => {
            if (prevMessages) {
              return prevMessages.filter((message: { id: number; }) => message.id !== selectedMessageId);
            }
            return prevMessages;
          });
        })
        .catch((error) => {
          console.error('Error when deleting message:', error);
        });
    }
  };


  const handleUpdateClick = () => {
    setIsContextMenuVisible(false);

    if (selectedMessageId !== null) {
      const selectedMessage = groupMessages?.find((message) => message.id === selectedMessageId);
      setUpdatedMessageContent(selectedMessage?.content || "");
      setInitialMessageContent(selectedMessage?.content || "");

      setUpdatedMessageContentTime(selectedMessage?.createdAt || "");
      setIsModalMenuVisible(true);
    }
  };


  const handleSaveMessage = () => {
    if (selectedMessageId !== null) {
      // Вызываем мутацию для обновления сообщения
      updateMessage({
        variables: {
          input: {
            id: selectedMessageId,
            content: updatedMessageContent,
          },
        },
      })
      .then(({ data }) => {
        setInitialMessageContent(data?.updateMessage?.content || '');
        setIsModalMenuVisible(false);
      })
      .catch((error) => {
        console.error('Error updating message:', error);
      });
    }
  };
  const handleCloseMessage = () => {
    setIsContextMenuVisible(false);
    console.log('handleCloseMessage')
  }

  const handleNone = () => {
  }

  return (
    <>
      <div className={`${styles['context__menu']} ${isContextMenuVisible ? styles.open : ''}`} style={{
        top: contextMenuPosition.top,
        left: contextMenuPosition.left,
        display: isModalMenuVisible ? 'none' : 'block',
      }}>
        <div onClick={handleDeleteClick}>{t('Delete')}</div>
        <div onClick={handleUpdateClick}>{t('Edit')}</div>
      </div>

      {isModalMenuVisible && (
        <AppModal isOpen={true} onClose={handleNone} paddingWindow='0px' >
          <div className={styles.modal} >
            <div className={styles.modal__container}>
              <div className={styles.modal__header}>
                <img src={iconClose} alt="iconClose" onClick={handleCloseMessage}/>
                <h2>{t('Edit message')}</h2>
              </div>

              <div className={styles.modal__imgEdit}>
                <div className={styles.modal__contentEdit}> {initialMessageContent}
                  <div className={styles.modal__time}>{toTime(updatedMessageContentTime)}</div>
                </div>
              </div>

              <div className={styles.modal__editMessage}>

                <div className={styles.modal__messageContainer}>
                  <div className={styles.modal__message}>
                    <input
                      type="text"
                      ref={inputMessageRef}
                      value={updatedMessageContent}
                      onChange={(e) => setUpdatedMessageContent(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleSaveMessage();
                        }
                      }}
                    />


                  </div>
                  <div className={styles.modal__save} onClick={handleSaveMessage}>

                    <img src={iconTickMark} alt="iconTickMark" />

                  </div>


                </div>
              </div>
            </div>
          </div>
        </AppModal>
      )}
    </>
  );
};







