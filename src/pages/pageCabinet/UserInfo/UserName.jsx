import * as React from 'react';
import user from '@/assets/cabinet/user.svg'

export const UserName = ({field, handleUpdate}) => {
    const [isEditable, setIsEditable] = React.useState(false)
    const [value, setValue] = React.useState(field)

    const changeState = () => {
        setIsEditable(!isEditable)
    }

    const update = (data) => {
        handleUpdate(data)
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
                            <p className="item-top__content-title">Name</p>
                            {isEditable ?
                                <input type="text" autoFocus className="item-top__input" defaultValue={field} onChange={(e) => setValue( e.target.value)}/> :
                                <span className="item-top__content-subtitle">{field}</span>}
                        </div>
                        {!value && <div className="item-top__status">Enter a name</div>}
                    </div>
                </div>
                <div className="item-bottom">
                    {isEditable ? <button className="user-info__button" disabled={!value} onClick={() => update({username: value})}>Change</button> :
                        <button className="user-info__button" onClick={changeState}>Set</button>}
                </div>
            </div>
    );
}