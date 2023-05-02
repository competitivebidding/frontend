import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client';

import blueBalance from '../../assets/imgHeader/blueBalance.svg'
import iconExit from '../../assets/imgHeader/iconExit.svg'
import iconNotification from '../../assets/imgHeader/iconNotification.svg'
import imgHeader from '../../assets/imgHeader/imgHeader.svg'

import './AppHeader.scss'
import LOGOUT_MUTATION from '../server/logout';

const AppHeader = ({ title }) => {
  const [isLogged, setIsLogged] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [logout] = useMutation(LOGOUT_MUTATION);

  const userAuth = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    if (localStorage.getItem('accesstoken')) {
      setIsLogged(true)
    }
  }, []);

  const handleLogout = async () => {
    console.log(userAuth)
    try {
      const response = await logout({
        variables: { logoutId: userAuth.id },
      });
      localStorage.removeItem('accesstoken');
      localStorage.removeItem('refreshtoken');
      localStorage.removeItem('user');
      setIsLogged(false);

    } catch (error) {
      console.error(error);
    }
  };

  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      <div className="header__group group">
        {isLogged ? (
          <>
            <img className='group__balance' src={blueBalance} alt="blueBalance" />
            <div className='group__balanceSum'>20</div>
            <img className='group__notifications' src={iconNotification} alt="iconNotification" />
            <p className='group__name'>{userAuth.username}</p>
            <img className='group__profile' src={imgHeader} alt="imgHeader" />
            <Link>
            <img className='group__exit' src={iconExit} alt="iconExit" onClick={handleLogout} />
            </Link>
          </>
        ) : (
          <>
            <Link to="/LogIn" className="group__log">
              Log in
            </Link>
            <Link to="/SignIn" className="group__sign">
              Sign in
            </Link>
          </>
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
