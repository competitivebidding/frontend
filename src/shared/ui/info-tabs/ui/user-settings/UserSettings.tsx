import React from 'react';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import {UserAvatar} from "../../../user-avatar/UserAvatar";
import {CabinetSettings} from '@feauters/cabinet-settings/CabinetSettings';
import {AppModal} from "../../../modal/AppModal";
import {useTranslation} from "react-i18next";

interface IUserSettingsProps {
    id: number
    avatarUrl: string
    handleUpdate?: any
}

interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}


export const UserSettings = ({id, avatarUrl, handleUpdate}: IUserSettingsProps) => {
    const {t} = useTranslation('cabinet')

    const [image, setImg] = useState(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const [isOpenSettings, setIsOpenSettings] = useState(false)

    const handleChangeFile = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        const file: File = (target.files as FileList)[0];
        // setImg(URL.createObjectURL(img))
    }
    const update = (data: string) => {
        handleUpdate({avatarUrl: data})
    }

    useEffect(() => {
        if (image) {
            update(image)
        }
    }, [image])

    return (
        <>
            <div className="cabinet-block user-info__settings">
                <div className="item-top">
                    <div className="upload-avatar">
                        <input type="file" hidden accept='image/*, .jpg, .png, .gif' max={1} ref={inputRef} onChange={handleChangeFile} />
                        <UserAvatar onClick={() => inputRef.current?.click()}/>
                    </div>
                    <div className="item-top__info">
                        <div className="item-top__status">{t('Unconfirmed')}</div>
                        <span className="item-top__title">{`ID: ${id || ''}`}</span>
                    </div>
                </div>
                <div className="item-bottom">
                    <button className="user-info__button" onClick={() => setIsOpenSettings(true)}>{t('Settings')}</button>
                </div>
            </div>
            {isOpenSettings && <AppModal title={'Settings'} onClose={setIsOpenSettings} isOpen={isOpenSettings}>
                <CabinetSettings />
            </AppModal>}
        </>
    );
}
