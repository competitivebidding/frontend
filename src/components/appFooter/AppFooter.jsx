import React from 'react';


import './AppFooter.scss';

const AppFooter = () => {
  return (
<footer class="footer">
    <nav> 

        <ul class="footer__menu">
            <li class="footer__menu-item"><a href="" class="footer__menu-link">Public offer</a></li>
            <li class="footer__menu-item"><a href="" class="footer__menu-link">Terms of use</a></li>
            <li class="footer__menu-item"><a href="" class="footer__menu-link">Security guarantee</a></li>
            <li class="footer__menu-item"><a href="" class="footer__menu-link">Privacy Policy</a></li>
            <li class="footer__menu-item"><a href="" class="footer__menu-link">Shipping and payment</a></li>
            <li class="footer__menu-item"><a href="" class="footer__menu-link">Victory Tactics</a></li>
        </ul>
    </nav>
    <p class="footer__copyright">Royal Auction© 2023. All rights reserved</p>
</footer>
  );
}

export default AppFooter;
