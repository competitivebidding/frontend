import * as React from 'react';
import logo from '@/assets/cabinet/logo.svg'
import {useEffect} from "react";

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
                    <img src={avatarUrl ? avatarUrl : logo} alt="" className="item-top__avatar" onClick={() => inputRef.current.click()}/>
                </div>
                <div className="item-top__info">
                    <div className="item-top__status">Unconfirmed</div>
                    <span className="item-top__title">{`ID: ${id}`}</span>
                </div>
            </div>
            <div className="item-bottom">
                <button className="user-info__button">Settings</button>
            </div>
        </div>
    );
}