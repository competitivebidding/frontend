import React, {useState} from 'react';
import {DropDown} from "../DropDown/DropDown";

import info from '@/assets/cabinet/info.svg'
import logo from '@/assets/cabinet/logo.svg'
import user from '@/assets/cabinet/user.svg'
import flag from '@/assets/cabinet/flag.svg'

import './UserInfo.scss'
import {useQuery} from "@apollo/client";
import {GET_PROFILE_QUERY} from "../../../components/server/getProfile";
import {UserInfoLoader} from "../UserInfoLoader/UserInfoLoader";
import DonutChart from "../../../components/Charts/DonutChart";

const dropDownData = [
    {title: <img src={flag} key={'a'} />, val: 'Russian Federation'},
    {title: <img src={flag} key={'b'} />, val: 'United Kingdom'},
    {title: <img src={flag} key={'c'} />, val: 'Kazakhstan'},
]

const UserInfo = () => {
    const [dropDownValue, setDropDownValue] = React.useState(dropDownData[0]);

    const {data, error, loading} = useQuery(GET_PROFILE_QUERY)

    const [userState, setUserState] = React.useState(null)
    const [isEditable, setIsEditable] = React.useState(false)
    const [name, setName] = React.useState(null)

    React.useEffect(() => {
        if (data) {
            setUserState(data.getProfile)
            setName(data.getProfile.username)
        }
    }, [data])

    const changeUserData = (value) => {
        setUserState((v) => ({...v, ...value}))
        setIsEditable(false)
    }

    console.log(userState)

    const chartData = {
        labels: [],
        datasets: [{
            label: '',
            data: [100, 10],
            borderWidth: 0,
            backgroundColor: ['rgba(255, 255, 255, 0.12)','#2F53FF'],
            datalabels: {
                display: false
            }
        }]
    }

    return (

        <>{loading && <UserInfoLoader />}
            {data && userState && <article className="user-info">
                <div className="cabinet-block user-info__settings">
                    <div className="item-top">
                        <img src={logo} alt="" className="item-top__avatar"/>
                        <div className="item-top__info">
                            <div className="item-top__status">Unconfirmed</div>
                            <span className="item-top__title">ID: 78950430</span>
                        </div>
                    </div>
                    <div className="item-bottom">
                        <button className="user-info__button">Settings</button>
                    </div>
                </div>
                <div className="cabinet-block user-info__level">
                    <DonutChart data={chartData} width={90} height={90}/>
                    <div className="level-content">
                        <div className="level-content__title">
                            <p>
                                Уровень авторизации
                            </p>
                            <i>
                                <img src={info} alt=""/>
                            </i>
                        </div>
                        <span className="level-content__status not-verified">Не верифицирован!</span>
                    </div>
                </div>

                <div className="cabinet-block user-info__item">
                    <div className="item-top">
                        <div className="item-top__image">
                            <img src={user} alt=""/>
                        </div>
                        <div className="item-top__info">
                            <div className="item-top__content">
                                {isEditable ?
                                    <input type="text" defaultValue={userState.username} onChange={(e) => setName(e.target.value)}/> :
                                    <p className="item-top__content-title">{userState.username}</p>}
                                <span className="item-top__content-subtitle">{userState.firstname}</span>
                            </div>
                            <div className="item-top__status">Enter a name</div>
                        </div>
                    </div>
                    <div className="item-bottom">
                        {isEditable ? <button className="user-info__button" disabled={!name} onClick={() => changeUserData({
                                'username': name
                            })}>Change</button> :
                            <button className="user-info__button" onClick={() => setIsEditable(!isEditable)}>Set</button>}
                    </div>
                </div>

                <div className="cabinet-block user-info__item">
                    <div className="item-top">
                        <div className="item-top__image">
                            <img src={user} alt=""/>
                        </div>
                        <div className="item-top__info">
                            <div className="item-top__content">
                                <p className="item-top__content-title">E-mail</p>
                                <span className="item-top__content-subtitle">{userState.email}</span>
                            </div>
                            <div className="item-top__status">Not Confirmed</div>
                        </div>
                    </div>
                    <div className="item-bottom">
                        <div className="item-bottom__content">
                            <p>The confirmation letter was sent to the post office</p>
                            <i>
                                <img src={info} alt=""/>
                            </i>
                        </div>
                    </div>
                </div>
                <div className="cabinet-block user-info__item">
                    <div className="item-top">
                        <div className="item-top__image">
                            <img src={user} alt=""/>
                        </div>
                        <div className="item-top__info">
                            <div className="item-top__content">
                                <p className="item-top__content-title">Phone</p>
                                <span className="item-top__content-subtitle">+7 912 609 79 07</span>
                            </div>
                            <div className="item-top__status confirmed">Confirmed</div>
                        </div>
                    </div>
                    <div className="item-bottom">
                        <button className="user-info__button">Confirm</button>
                    </div>
                </div>
                <div className="cabinet-block user-info__item">
                    <div className="item-top">
                        <div className="item-top__image">
                            <img src={user} alt=""/>
                        </div>
                        <div className="item-top__info">
                            <div className="item-top__content">
                                <p className="item-top__content-title">Instagram</p>
                                <span className="item-top__content-subtitle">{userState.instagram}</span>
                            </div>
                            <div className="item-top__status">Not Confirmed
                            </div>
                        </div>
                    </div>
                    <div className="item-bottom">
                        <button className="user-info__button">Set</button>
                    </div>
                </div>
                <div className="cabinet-block user-info__item">
                    <div className="item-top">
                        <div className="item-top__image">
                            <img src={user} alt=""/>
                        </div>
                        <div className="item-top__info">
                            <div className="item-top__content">
                                <p className="item-top__content-title">Payment information</p>
                                <span className="item-top__content-subtitle">Not connected</span>
                            </div>

                        </div>
                    </div>
                    <div className="item-bottom">
                        <button className="user-info__button">Connect</button>
                    </div>
                </div>
                <div className="cabinet-block user-info__item">
                    <div className="item-top">
                        <div className="item-top__image">
                            <img src={user} alt=""/>
                        </div>
                        <div className="item-top__info">
                            <div className="item-top__content">
                                <p className="item-top__content-title">Country</p>
                                <span className="item-top__content-subtitle">{dropDownValue.val}</span>
                            </div>
                            <div>
                                <DropDown data={dropDownData} current={dropDownValue} onChange={setDropDownValue}/></div>
                        </div>
                    </div>
                    <div className="item-bottom">
                        <div className="item-bottom__content">
                            <p>The country was set automatically
                            </p>
                            <i>
                                <img src={info} alt=""/>
                            </i>
                        </div>
                    </div>
                </div>
            </article>}
        </>
    );
};

export default UserInfo;