import React from 'react';

import './UserInfo.scss'

import UserInfoButtons from './UserInfoComponents/UserInfoButtons';
import UserInfoAccount from './UserInfoComponents/UserInfoAccount';
import UserInfoIDK from './UserInfoComponents/UserInfoIDK';

const UserInfo = () => {
    return (
        <section className='block'>
            <UserInfoButtons/>
            <UserInfoAccount/>
            <UserInfoIDK/>
        </section>
    );
}

export default UserInfo;
