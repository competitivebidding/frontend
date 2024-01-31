import React from 'react';

import cls from './AppFooter.module.scss';
import { useTranslation } from 'react-i18next'

const AppFooter = () => {
  const { t } = useTranslation('appFooter')

  return (
      <footer className={cls.footer}>
        <nav>
          <ul className={cls['footer__menu']}>
            <li className={cls['footer__menu-item']}>
              <a href="" className={cls['footer__menu-link']}>
                {t('Public offer')}
              </a>
            </li>
            <li className={cls['footer__menu-item']}>
              <a href="" className={cls['footer__menu-link']}>
                {t('Terms of use')}
              </a>
            </li>
            <li className={cls['footer__menu-item']}>
              <a href="" className={cls['footer__menu-link']}>
                {t('Security guarantee')}
              </a>
            </li>
            <li className={cls['footer__menu-item']}>
              <a href="" className={cls['footer__menu-link']}>
                {t('Privacy Policy')}
              </a>
            </li>
            <li className={cls['footer__menu-item']}>
              <a href="" className={cls['footer__menu-link']}>
                {t('Shipping and payment')}
              </a>
            </li>
            <li className={cls['footer__menu-item']}>
              <a href="" className={cls['footer__menu-link']}>
                {t('Victory Tactics')}
              </a>
            </li>
          </ul>
        </nav>
        <p className={cls['footer__copyright']}>COMPETITIVE BIDDING© 2023. {t('All rights reserved')}</p>
      </footer>
  );
}

export default AppFooter;
