import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import Cookies from 'js-cookie';

import blueBalance from '../../assets/imgHeader/blueBalance.svg'
import iconExit from '../../assets/imgHeader/iconExit.svg'
import iconNotification from '../../assets/imgHeader/iconNotification.svg'
import imgHeader from '../../assets/imgHeader/imgHeader.svg'

import './AppHeader.scss'
import LOGOUT_MUTATION from '../server/logout';
import HeaderBurger from "@/components/Burger/HeaderBurger";
import {AuthContext} from "../../context/AuthContext";
import {UserAvatar} from "../UserAvatar/UserAvatar";
import {LangSwitcher} from "../LangSwitcher/LangSwitcher";

import './AppHeader.scss'
const AppHeader = ({ title }) => {

  const [isLogged, setIsLogged] = useState(false);
  const [logout] = useMutation(LOGOUT_MUTATION);

  const userAuthString = Cookies.get('user');
  const userAuth = userAuthString ? JSON.parse(userAuthString) : null;

  useEffect(() => {
    if (Cookies.get('refreshtoken') && userAuth && userAuth.username) {
      setIsLogged(true);
    }
    console.log(123)
  }, []);

  const handleLogout = async () => {
    try {
      const response = await logout({
        variables: { logoutId: userAuth.id },
      });
      Cookies.remove('accesstoken');
      Cookies.remove('refreshtoken');
      Cookies.remove('user');
      setIsLogged(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      <div className="header__group group">
        {isLogged ? (
          <>
            <div className='group__balance'>
              <img src={blueBalance} alt="blueBalance" />
              <div className='group__balanceSum'>20</div>
            </div>
            <LangSwitcher />
            <img className='group__notifications' src={iconNotification} alt="iconNotification" />
            <p className='group__name'>{user && user.username}</p>
            <Link to={'/cabinet'}>
              <UserAvatar width={40} height={40} />
            </Link>
            <p className='group__name'>{userAuth && userAuth.username}</p>
            <img className='group__profile' src={imgHeader} alt="imgHeader" />
            <Link>
            <img className='group__exit' src={iconExit} alt="iconExit" onClick={handleLogout} />
            </Link>
          </>
        ) : (
          <div className="group__container">
            <Link to="/LogIn" className="group__log">
              Log in
            </Link>
            <Link to="/SignIn" className="group__sign">
              Sign in
            </Link>
            <HeaderBurger/>
          </div>
        )}
      </div>
      {/* {isModalOpen && (
        <div className="modal">
              <button onClick={handleLogout}>OK</button>
              <button onClick={toggleModal}>Cancel</button>
        </div>
      )} */}

    </header>
  )
}






export default AppHeader
