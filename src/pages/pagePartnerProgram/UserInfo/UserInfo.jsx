import React from 'react';

import './UserInfo.scss'

import UserInfoButtons from './UserInfoComponents/UserInfoButtons';
import UserInfoAccount from './UserInfoComponents/UserInfoAccount';
import UserInfoIDK from './UserInfoComponents/UserInfoIDK';
import ForPartners from "@/pages/pagePartnerProgram/UserInfo/UserInfoComponents/ForPartners";

const UserInfo = () => {
    return (
        <section className='block'>
            <UserInfoButtons/>
            <UserInfoAccount/>
            {/*<UserInfoIDK/>*/}
            <ForPartners/>
        </section>
    );
}

export default UserInfo;
