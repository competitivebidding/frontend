import React from 'react';
import AppHeader from '../../components/appHeader/AppHeader.jsx';
import UserInfo from './UserInfo/UserInfo.jsx';

const PartnerPage = ({title}) => {
  return (
    <div>
      <AppHeader title={title}/>
      <UserInfo/>
    </div>
  );
}

export default PartnerPage;
