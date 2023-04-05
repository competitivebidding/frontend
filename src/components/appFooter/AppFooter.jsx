import React from 'react';


import './AppFooter.scss';

const AppFooter = () => {
  return (
<footer className="footer">
    <nav>

        <ul className="footer__menu">
            <li className="footer__menu-item"><a href="" className="footer__menu-link">Public offer</a></li>
            <li className="footer__menu-item"><a href="" className="footer__menu-link">Terms of use</a></li>
            <li className="footer__menu-item"><a href="" className="footer__menu-link">Security guarantee</a></li>
            <li className="footer__menu-item"><a href="" className="footer__menu-link">Privacy Policy</a></li>
            <li className="footer__menu-item"><a href="" className="footer__menu-link">Shipping and payment</a></li>
            <li className="footer__menu-item"><a href="" className="footer__menu-link">Victory Tactics</a></li>
        </ul>
    </nav>
    <p className="footer__copyright">COMPETITIVE BIDDING© 2023. All rights reserved</p>
</footer>
  );
}

export default AppFooter;
