import React from 'react';

import {useMutation, useQuery} from "@apollo/client";
import {UserInfoLoader} from "../UserInfoLoader/UserInfoLoader";
import {UserName} from "./UserName";
import {UserEmail} from "./UserEmail";
import {UserPhone} from "./UserPhone";
import {UserInst} from "./UserInst";
import {PaymentModal} from "../PaymentModal/PaymentModal";
import {createPortal} from "react-dom";
import {UserPaymentsInfo} from "./UserPaymentsInfo";
import {UserCountry} from "./UserCountry";
import {UserSettings} from "./UserSettings";
import {UserInfoLevel} from "./UserInfoLevel";
import {
    GET_PROFILE_QUERY,
    GET_USER_ADDRESS, GET_USER_PAYMENT,
    UPDATE_PROFILE,
} from "../../../components/server/userProfile";
import './UserInfo.scss'


const UserInfo = () => {
    const [modalIsOpen, setModalIsOpen] = React.useState(false)
    const [userData, setUserData] = React.useState(null)

    const {data, error, loading, refetch} = useQuery(GET_PROFILE_QUERY)
    const {data: payments} = useQuery(GET_USER_PAYMENT)
    const {data: address} = useQuery(GET_USER_ADDRESS)

    const [update] = useMutation(UPDATE_PROFILE)

    const updateProfile = (data) => {
        console.log(data)
        update({
            variables: {
                updateUserInput: {...data}
            }
        }).then(() => refetch())
    }

    React.useEffect(() => {
        if (!loading) {
            setUserData(data.getProfile)
        }
    }, [data])

    return (
        <>{loading && <UserInfoLoader />}

                <>
                    <article className="user-info">
                        { userData &&
                            <>
                                <UserSettings id={userData.id} avatarUrl={userData.avatarUrl}/>
                                <UserInfoLevel />
                                <UserName field={userData.username} handleUpdate={updateProfile}/>
                                <UserEmail field={userData.email} handleUpdate={updateProfile}/>
                                <UserPhone field={userData.phone} handleUpdate={updateProfile}/>
                                <UserInst field={userData.instagram} handleUpdate={updateProfile}/>
                            </>
                        }
                        <UserPaymentsInfo onOpen={setModalIsOpen}/>
                        <UserCountry />
                    </article>
                    {modalIsOpen && createPortal(<PaymentModal onClose={setModalIsOpen}/>, document.body)}
                </>

        </>
    );
};

export default UserInfo;