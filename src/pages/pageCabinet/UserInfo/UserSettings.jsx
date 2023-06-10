import * as React from 'react';
import {useEffect} from 'react';
import {UserAvatar} from "../../../components/UserAvatar/UserAvatar";
import {CabinetSettings} from "../CabinetSettings/CabinetSettings";
import {AppModal} from "../../../components/appModal/AppModal";
import {useTranslation} from "react-i18next";

export const UserSettings = ({id, avatarUrl, handleUpdate}) => {
    const {t} = useTranslation('cabinet')

    const [image, setImg] = React.useState(null)
    const inputRef = React.useRef(null)

    const [isOpenSettings, setIsOpenSettings] = React.useState(false)

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
        <>
            <div className="cabinet-block user-info__settings">
                <div className="item-top">
                    <div className="upload-avatar">
                        <input type="file" hidden accept='image/*, .jpg, .png, .gif' max={1} ref={inputRef} onChange={handleChangeFile} />
                        <UserAvatar onClick={() => inputRef.current.click()}/>
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
            {isOpenSettings &&
                <AppModal title={'Settings'} onClose={setIsOpenSettings}>
                    <CabinetSettings />
                </AppModal>}
        </>
    );
}