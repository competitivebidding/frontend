import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import Cookies from 'js-cookie'

import blueBalance from '@assets/imgHeader/blueBalance.svg'
import iconExit from '@assets/imgHeader/iconExit.svg'
import iconNotification from '@assets/imgHeader/iconNotification.svg'

import LOGOUT_MUTATION from '../../shared/schemas/auth/logout'
import HeaderBurger from '@/widgets/burger/HeaderBurger'
import { AuthContext } from '../../context/AuthContext'
import { UserAvatar } from '../../shared/ui/user-avatar/UserAvatar'
import { LangSwitcher } from '../../feauters/lang-switcher/LangSwitcher'
import './AppHeader.scss'

const AppHeader = ({ title }) => {

  const [isLogged, setIsLogged] = useState(false);
  const [logout] = useMutation(LOGOUT_MUTATION);

  const userAuthString = Cookies.get('user');
  const userAuth = userAuthString ? JSON.parse(userAuthString) : null;
  const {value} = useContext(AuthContext)

  useEffect(() => {
    if (Cookies.get('refreshtoken') && userAuth && userAuth.username) {
      setIsLogged(true);
    }
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
            <p className='group__name'>{userAuth && value.username}</p>
            <Link to={'/cabinet'}>
              <UserAvatar width={40} height={40} />
            </Link>
            <Link>
            <img className='group__exit' src={iconExit} alt="iconExit" onClick={handleLogout} />
            </Link>
            <HeaderBurger/>
          </>
        ) : (
          <div className="group__container">
            <Link to="/SignIn" className="group__log">
              Log in
            </Link>
            <Link to="/SignUp" className="group__sign">
              Sign up
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
