import * as React from 'react';
import {useState} from "react";
import {useMutation} from "@apollo/client";
import {CREATE_MY_ROOM} from "@/components/server/messages";
import './AddNewGroupForm.scss';

export const AddNewGroupForm = ({onClose}) => {
    const [value, setValue] = useState('')
    const [createRoom, {data, loading, error}] = useMutation(CREATE_MY_ROOM)

    console.log(['FROM_ADD_NEW_GROUP', {data, loading, error}])

    const handleCreateRoom = () => {
        if (value.length > 0) {
            createRoom({
                variables: {
                    input: {
                        title: value
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