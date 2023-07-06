import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'
import Cookies from 'js-cookie'

import blueBalance from '@assets/imgHeader/blueBalance.svg'
import iconExit from '@assets/imgHeader/iconExit.svg'
import iconNotification from '@assets/imgHeader/iconNotification.svg'

import LOGOUT_MUTATION from '../../shared/schemas/auth/logout'
import HeaderBurger from '@/widgets/burger/HeaderBurger'
import { UserAvatar } from '@shared/ui/user-avatar/UserAvatar'

import './AppHeader.scss'
import { GetProfileDocument } from '@shared/lib/types/__generated-types__/graphql'
import { getPageTitle } from '@shared/lib/routes/getPath'
import { LangSwitcher } from '@features/lang-switcher/LangSwitcher'

const AppHeader = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [logout] = useMutation(LOGOUT_MUTATION)

  const [title, setTitle] = useState<string | undefined>(undefined)

  const userAuthString = Cookies.get('user')
  const userAuth = userAuthString ? JSON.parse(userAuthString) : null

  const { data } = useQuery(GetProfileDocument)

  useEffect(() => {
    setTitle(getPageTitle(location.pathname))

    if (Cookies.get('refreshtoken') && userAuth && userAuth.username) {
      setIsLogged(true)
    }
  }, [])

  const handleLogout = async () => {
    try {
      const response = await logout({
        variables: { logoutId: userAuth.id },
      })
      Cookies.remove('accesstoken')
      Cookies.remove('refreshtoken')
      Cookies.remove('user')
      setIsLogged(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      <div className="header__group group">
        {isLogged ? (
          <>
            <div className="group__balance">
              <img src={blueBalance} alt="blueBalance" />
              <div className="group__balanceSum">20</div>
            </div>
            <LangSwitcher />
            <img className="group__notifications" src={iconNotification} alt="iconNotification" />
            <p className="group__name">{userAuth && data?.getProfile.username}</p>
            <Link to={'/cabinet'}>
              <UserAvatar width={40} height={40} />
            </Link>
            <img className="group__exit" src={iconExit} alt="iconExit" onClick={handleLogout} />
            <HeaderBurger isClicked={isClicked} setIcClicked={() => setIsClicked(!isClicked)} />
          </>
        ) : (
          <div className="group__container">
            <Link to="/SignIn" className="group__log">
              Log in
            </Link>
            <Link to="/SignUp" className="group__sign">
              Sign up
            </Link>
            <HeaderBurger isClicked={isClicked} setIcClicked={() => setIsClicked(!isClicked)} />
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
