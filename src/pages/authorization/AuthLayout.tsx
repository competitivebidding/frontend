import cls from './AuthLayout.module.scss'
import iconAuth from '@assets/imgAuth/iconAuth.svg'
import rocket from '@assets/imgAuth/rocket.png'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { LangSwitcher } from '@features/lang-switcher/LangSwitcher'
import { useTranslation } from 'react-i18next'

const AuthLayout = () => {
    const { t } = useTranslation('authPage')

    return (
        <div className={cls.auth}>
            <div className={cls.test}>
                <LangSwitcher />
            </div>
            <div className={cls.left}>
                <Link to="/" className={cls.left__icon}>
                    <img src={iconAuth} alt="icon" />
                    <div>
                        <div className={cls.icon__title}>
                            COMPETITIVE
                            <br /> BIDDIN
                        </div>
                    </div>
                    </Link>

                <div className={cls.left__rocket}>
                    <img src={rocket} alt="" />
                    <div className={cls.rocket__title}>Competitive Biddin</div>
                </div>

                <div className={cls.rocket__descr}>{t('Before you start participating in the auction, complete all tasks')}.</div>

                <div className={cls.left__footer}>Competitive Biddin© 2023. {t('All rights reserved')}</div>
            </div>
            <div className={cls.form__wrapper}>
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout
