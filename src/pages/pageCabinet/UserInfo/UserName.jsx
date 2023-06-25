import * as React from 'react';
import icon from '@/assets/cabinet/icons/user.svg'
import {useContext, useEffect} from "react";
import {AuthContext} from "../../../context/AuthContext";
import {useLocalStorage} from "../../../hooks/useLocalStorage";
import {useTranslation} from "react-i18next";

export const UserName = ({field, handleUpdate}) => {
    const {t} = useTranslation('cabinet')
    const [isEditable, setIsEditable] = React.useState(false)
    const [value, setValue] = React.useState(field)
    const {value: user, setValue: setUserName} = useContext(AuthContext)
    const {setValue: setLS} = useLocalStorage('user')

    const changeState = () => {
        setIsEditable(!isEditable)
    }

    const update = (data) => {
        handleUpdate(data)
        setIsEditable(false)
        setUserName({...user, username: value})
        setLS({...user, username: value})
    }

    useEffect(() => {
        if (field) {
            setValue(field)
        }
    }, [field])

    return (
        <div className="cabinet-block user-info__item">
                <div className="item-top">
                    <div className="item-top__image">
                        <img src={icon} alt=""/>
                    </div>
                    <div className="item-top__info">
                        <div className="item-top__content">
                            <p className="item-top__content-title">Name</p>
                            {isEditable ?
                                <input type="text" autoFocus className="item-top__input" defaultValue={field} onChange={(e) => setValue( e.target.value)}/> :
                                <span className="item-top__content-subtitle">{field}</span>}
                        </div>
                        {!value && <div className="item-top__status">Enter a name</div>}
                    </div>
                </div>
                <div className="item-bottom">
                    {isEditable ? <button className="user-info__button" disabled={!value} onClick={() => update({username: value})}>{t('change')}</button> :
                        <button className="user-info__button" onClick={changeState}>{t('set')}</button>}
                </div>
            </div>
    );
}