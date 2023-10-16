import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import Cookies from 'js-cookie';

import blueBalance from '@assets/imgHeader/blueBalance.svg';
import iconExit from '@assets/imgHeader/iconExit.svg';
import iconNotification from '@assets/imgHeader/iconNotification.svg';

import LOGOUT_MUTATION from '../../shared/schemas/auth/logout';
import HeaderBurger from '@/widgets/burger/HeaderBurger';
import { UserAvatar } from '@shared/ui/user-avatar/UserAvatar';

import cls from './AppHeader.module.scss'; // Импортируйте имена классов из CSS-модуля

import { GetProfileDocument } from '@shared/lib/types/__generated-types__/graphql';
import { getPageTitle } from '@shared/lib/routes/getPath';
import { LangSwitcher } from '@features/lang-switcher/LangSwitcher';

const AppHeader = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [logout] = useMutation(LOGOUT_MUTATION);

  const [title, setTitle] = useState<string | undefined>(undefined);

  const userAuthString = Cookies.get('user');
  const userAuth = userAuthString ? JSON.parse(userAuthString) : null;

  const { data } = useQuery(GetProfileDocument);

  useEffect(() => {
    setTitle(getPageTitle(location.pathname));

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
  }

  return (
      <header className={cls.header}>
        <h1 className={cls.header__title}>{title}</h1>
        <div className={`${cls.group}`}>
          {isLogged ? (
              <>
                <div className={`${cls.group__balance} `}>
                  <img src={blueBalance} alt="blueBalance" />
                  <div className={`${cls.group__balanceSum} `}>20</div>
                </div>
                <LangSwitcher />
                <img className={cls.group__notifications} src={iconNotification} alt="iconNotification" />
                <p className={`${cls.group__name} `}>{userAuth && data?.getProfile.username}</p>
                <Link to={'/cabinet'}>
                  <UserAvatar width={40} height={40} />
                </Link>
                <img className={`${cls.group__exit}`} src={iconExit} alt="iconExit" onClick={handleLogout} />
                <HeaderBurger isClicked={isClicked} setIcClicked={() => setIsClicked(!isClicked)} />
              </>
          ) : (
              <div className={`${cls.group__container}`}>
                <LangSwitcher />
                <Link to="/SignIn" className={`${cls.group__log}`}>
                  Log in
                </Link>
                <Link to="/SignUp" className={`${cls.group__sign}`}>
                  Sign up
                </Link>
                <HeaderBurger isClicked={isClicked} setIcClicked={() => setIsClicked(!isClicked)} />
              </div>
          )}
        </div>
      </header>
  );
}

export default AppHeader;
``
