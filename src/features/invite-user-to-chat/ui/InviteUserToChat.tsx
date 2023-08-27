import * as React from 'react'
import {useEffect, useRef, useState} from 'react'
import {useMutation, useQuery} from '@apollo/client'
import scss from './InviteUserToChat.module.scss'
import {GET_ALL_MY_ROOMS, GET_ALL_USERS_BY_ROOM_ID} from '@shared/schemas/messages/messages'
import {AddUserInRoomDocument, GetRoomByIdDocument} from '@shared/lib/types/__generated-types__/graphql'

interface IAddNewGroupFormProps {
    onClose: (value: boolean) => void
    title: string,
    actionText: string
    roomId: number
}

export const InviteUserToChat = ({ onClose, title, actionText, roomId }: IAddNewGroupFormProps) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState('')
    const [addUserInRoom] = useMutation(AddUserInRoomDocument)
    const {refetch} = useQuery(GET_ALL_USERS_BY_ROOM_ID, {variables: {roomId}})

    const handleInviteUser = () => {
        if (value.length > 0) {
            addUserInRoom({
                variables: {
                    addUser: {
                        roomId,
                        userId: Number(value)
                    }
                }
            }).then(() => refetch())
        }
        setValue('')
        onClose(false)
    }

    useEffect(() => {
        inputRef?.current?.focus()
    }, [])

    return (
        <div className={scss.modal__form}>
            <div className={scss.modal__form_title}>{title}</div>
            <input
                ref={inputRef}
                type="text"
                className={scss.modal__form_name}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {<button disabled={value.length < 1} className={scss.modal__form_button} onClick={handleInviteUser}>
                {actionText}
            </button>}
        </div>
    )
}
