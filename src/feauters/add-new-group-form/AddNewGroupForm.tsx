import * as React from 'react';
import {FC, useState} from "react";
import {useMutation} from "@apollo/client";
import './AddNewGroupForm.scss';
import {CREATE_MY_ROOM} from '@shared/schemas/messages/messages';

interface IAddNewGroupFormProps {
    onClose: (value: boolean) => void
}

export const AddNewGroupForm: FC<IAddNewGroupFormProps> = ({onClose}) => {
    const [value, setValue] = useState('')
    const [createRoom] = useMutation(CREATE_MY_ROOM)

    const handleCreateRoom = () => {
        if (value.length > 0) {
            createRoom({
                variables: {
                    input: {
                        title: value,
                        description: ''
                    }
                }
            }).then((v) => console.log(v))
        }
        setValue('')
        onClose(false)
    }

    return (
        <div className="modalNewGroup">
            <div className="modalNewGroup__title">Enter your group name</div>
            <input
                type="text"
                className="modalNewGroup__name"

                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button className="modalNewGroup__button" onClick={handleCreateRoom}>
                Create Group
            </button>
        </div>
    );
};
