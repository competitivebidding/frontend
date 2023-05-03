import * as React from 'react';
import user from '@/assets/cabinet/user.svg'

export const UserInst = ({field, handleUpdate}) => {
    const [isEditable, setIsEditable] = React.useState(false)
    const [value, setValue] = React.useState(field)

    const changeState = () => {
        setIsEditable(!isEditable)
    }

    const update = (data) => {
        handleUpdate({instagram: data})
        setIsEditable(false)
    }

    return (
        <div className="cabinet-block user-info__item">
            <div className="item-top">
                <div className="item-top__image">
                    <img src={user} alt=""/>
                </div>
                <div className="item-top__info">
                    <div className="item-top__content">
                        <p className="item-top__content-title">Instagram</p>
                        {isEditable ?
                            <input autoFocus type="text" className="item-top__input" defaultValue={field} onChange={(e) => setValue( e.target.value)}/> :
                            <span className="item-top__content-subtitle">{field}</span>}
                    </div>
                    <div className="item-top__status">Not Confirmed
                    </div>
                </div>
            </div>
            <div className="item-bottom">
                {isEditable ? <button className="user-info__button" disabled={!value} onClick={() => update(value)}>Change</button> :
                    <button className="user-info__button" onClick={changeState}>Set</button>}
            </div>
        </div>
    );
}