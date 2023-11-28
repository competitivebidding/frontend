import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {useMutation, useQuery} from '@apollo/client';
import Cookies from 'js-cookie';

import blueBalance from '@assets/imgHeader/blueBalance.svg';
import iconExit from '@assets/imgHeader/iconExit.svg';
import iconNotification from '@assets/imgHeader/iconNotification.svg';

import LOGOUT_MUTATION from '../../shared/schemas/auth/logout';
import HeaderBurger from '@/widgets/burger/HeaderBurger';
import {UserAvatar} from '@shared/ui/user-avatar/UserAvatar';

import cls from './AppHeader.module.scss';

import {GetProfileDocument} from '@shared/lib/types/__generated-types__/graphql';
import {LangSwitcher} from '@features/lang-switcher/LangSwitcher';
import {useTranslation} from 'react-i18next'
import {routesConfig} from "@shared/lib/routes/routesConfig";
import {GET_PROFILE_QUERY} from "@shared/schemas/user/userProfile";

const AppHeader = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const location = useLocation()
  const [logout] = useMutation(LOGOUT_MUTATION);
  const { t } = useTranslation('headerTitles')

  const [title, setTitle] = useState<string>('Main');

  const userAuthString = Cookies.get('user');
  const userAuth = userAuthString ? JSON.parse(userAuthString) : null;

  const { data } = useQuery(GetProfileDocument);
  const { data: userData } = useQuery(GET_PROFILE_QUERY);

  const getCurrentPageTitle = () => {
    const currentPath = location.pathname;
    const matchingRoute = Object.values(routesConfig).find(route => currentPath === route.path);
    return matchingRoute ? matchingRoute.name : 'Main';
  }

  const handleLogout = async () => {
    try {
       await logout({
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

  useEffect(() => {
    if (Cookies.get('refreshtoken') && userAuth && userAuth.username) {
      setIsLogged(true);
    }
  }, []);

  useEffect(() => {
    setTitle(getCurrentPageTitle());
  }, [location.pathname]);

  return (
      <header className={cls.header}>
        <h1 className={cls.header__title}>{t(title)}</h1>
        <div className={`${cls.group}`}>
          {isLogged ? (
              <>
                <div className={`${cls.group__balance} `}>
                  <img src={blueBalance} alt="blueBalance" />
                  <div className={`${cls.group__balanceSum} `}>{userData?.getProfile.balance}</div>
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
                  {t('Log in')}
                </Link>
                <Link to="/SignUp" className={`${cls.group__sign}`}>
                  {t('Sign up')}
                </Link>
                <HeaderBurger isClicked={isClicked} setIcClicked={() => setIsClicked(!isClicked)} />
              </div>
          )}
        </div>
      </header>
  );
}

export default AppHeader;
