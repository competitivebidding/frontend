import React from 'react';

import cls from './AppFooter.module.scss';

const AppFooter = () => {
  return (
      <footer className={cls.footer}>
        <nav>
          <ul className={cls['footer__menu']}>
            <li className={cls['footer__menu-item']}>
              <a href="" className={cls['footer__menu-link']}>
                Public offer
              </a>
            </li>
            <li className={cls['footer__menu-item']}>
              <a href="" className={cls['footer__menu-link']}>
                Terms of use
              </a>
            </li>
            <li className={cls['footer__menu-item']}>
              <a href="" className={cls['footer__menu-link']}>
                Security guarantee
              </a>
            </li>
            <li className={cls['footer__menu-item']}>
              <a href="" className={cls['footer__menu-link']}>
                Privacy Policy
              </a>
            </li>
            <li className={cls['footer__menu-item']}>
              <a href="" className={cls['footer__menu-link']}>
                Shipping and payment
              </a>
            </li>
            <li className={cls['footer__menu-item']}>
              <a href="" className={cls['footer__menu-link']}>
                Victory Tactics
              </a>
            </li>
          </ul>
        </nav>
        <p className={cls['footer__copyright']}>COMPETITIVE BIDDING© 2023. All rights reserved</p>
      </footer>
  );
}

export default AppFooter;
