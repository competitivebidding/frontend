import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useMutation } from '@apollo/client'
import cls from './AddNewGroupForm.module.scss'
import { CREATE_MY_ROOM, GET_ALL_MY_ROOMS } from '@shared/schemas/messages/messages'
import { CreateMyRoomDocument } from '@shared/lib/types/__generated-types__/graphql'
import { useTranslation } from 'react-i18next'

interface IAddNewGroupFormProps {
  onClose: (value: boolean) => void
}

export const AddNewGroupForm = ({ onClose }: IAddNewGroupFormProps) => {
  const fieldRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState('')
  const [createRoom] = useMutation(CreateMyRoomDocument, { refetchQueries: [GET_ALL_MY_ROOMS] })
  const { t } = useTranslation('addNewGroupForm')


  const handleCreateRoom = () => {
    if (value.length > 0) {
      createRoom({
        variables: {
          input: {
            title: value,
            description: 'new room',
          },
        },
      }).then((v) => console.log(v))
    }
    setValue('')
    onClose(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCreateRoom();
    }
  };


  useEffect(() => {
    fieldRef?.current?.focus()
  }, [])

  return (
    <div className={cls.modalNewGroup}>
      <div className={cls.modalNewGroup__title}>{t('Enter your group name')}</div>
      <input
        ref={fieldRef}
        type="text"
        className={cls.modalNewGroup__name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleKeyPress} 
      />
      <button className={cls.modalNewGroup__button} onClick={handleCreateRoom}>
        {t('Create Group')}
      </button>
    </div>
  )
}
