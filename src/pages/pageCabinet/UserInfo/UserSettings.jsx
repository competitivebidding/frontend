import * as React from 'react';
import {useEffect} from "react";
import {Avatar} from "@mui/material";
import {UserAvatar} from "../../../components/UserAvatar/UserAvatar";

export const UserSettings = ({id, avatarUrl, handleUpdate}) => {
    const [image, setImg] = React.useState(null)
    const inputRef = React.useRef(null)

    const handleChangeFile = (e) => {
        let img = e.target.files[0];
        setImg(URL.createObjectURL(img))

    }
    const update = (data) => {
        handleUpdate({avatarUrl: data})
    }

    useEffect(() => {
        if (image) {
            update(image)
        }
    }, [image])

    return (
        <div className="cabinet-block user-info__settings">
            <div className="item-top">
                <div className="upload-avatar">
                    <input type="file" hidden accept='image/*, .jpg, .png, .gif' max={1} ref={inputRef} onChange={handleChangeFile} />
                    <UserAvatar onClick={() => inputRef.current.click()}/>
                </div>
                <div className="item-top__info">
                    <div className="item-top__status">Unconfirmed</div>
                    <span className="item-top__title">{`ID: ${id && id}`}</span>
                </div>
            </div>
            <div className="item-bottom">
                <button className="user-info__button">Settings</button>
            </div>
        </div>
    );
}