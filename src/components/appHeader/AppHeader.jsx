import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import blueBalance from '../../assets/imgHeader/blueBalance.svg'
import iconExit from '../../assets/imgHeader/iconExit.svg'
import iconNotification from '../../assets/imgHeader/iconNotification.svg'
import imgHeader from '../../assets/imgHeader/imgHeader.svg'

import './AppHeader.scss'

const AppHeader = ({ title }) => {
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    localStorage.getItem('login')

    if (localStorage.getItem('login') == 'true') {
      setIsLogged(true)
    }

    console.log('test console log')
  }, []);

  // const login = localStorage.getItem('login');
  // if (login) {
  //   console.log(login);
  // } else {
  //   console.log('Login value is null or undefined');
  // }


  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      <div className="header__group group">

        {isLogged ?
          <>
            <img className='group__balance' src={blueBalance} alt="blueBalance" />
            <div className='group__balanceSum'>20</div>
            <img className='group__notifications' src={iconNotification} alt="iconNotification" />
            <p className='group__name'>NickName</p>
            <img className='group__profile' src={imgHeader} alt="imgHeader" />
            <img className='group__exit' src={iconExit} alt="iconExit" />
          </>
          :
          <>
            <Link to="/LogIn" className="group__log">
              Log in
            </Link>
            <Link to="/SignIn" className="group__sign">
              Sign in
            </Link>
          </>
        }

      </div>
    </header>
  )
}

export default AppHeader
