import React, {FC, useState} from 'react';
import styles from './HeaderBurger.module.scss'
import AppNavBar from "../nav-bar/AppNavBar";

interface IHeaderBurgerProps {
    isClicked: boolean
    setIcClicked: () => void
}

export const HeaderBurger:FC<IHeaderBurgerProps> = ({isClicked, setIcClicked}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.a}>
            <div className={isActive ? styles.overlay : styles.overlay + ' ' + styles.overlay_hidden} onClick={() => setIsActive(!isActive)}/>
            <div className={styles.burger} onClick={() => setIsActive(!isActive)}>
                <span className={isActive ? styles.burger__line : styles.burger__line + ' ' + styles.burger__line_short}></span>
                <span className={!isActive ? styles.burger__line : styles.burger__line + ' ' + styles.burger__line_short}></span>
            </div>

            <div className={isActive ? styles.navbar_container + ' ' + styles.navbar_container_active: styles.navbar_container}>
                {isActive && <AppNavBar/>}
            </div>
        </div>
    );
}

export default HeaderBurger;
