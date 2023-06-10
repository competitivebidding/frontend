import React from 'react';
import {DropDown} from "../DropDown/DropDown";
import {useTranslation} from "react-i18next";

import {ReactComponent as US } from '@/assets/cabinet/dropdown/US.svg'
import {ReactComponent as RU } from '@/assets/cabinet/dropdown/RU.svg'
import {ReactComponent as UA } from '@/assets/cabinet/dropdown/UA.svg'

export const langs = [
    {label: <UA key={'ua'}/>, value: 'ua',},
    {label: <RU key={'ru'}/>, value: 'ru',},
    {label: <US key={'en'}/>, value: 'en',},
]

export const LangSwitcher = () => {
    const [currentLang, setCurrentLang] = React.useState(localStorage.getItem('i18nextLng') || 'en')
    const {t, i18n} = useTranslation()

    const changeLang = async (v) => {
        setCurrentLang(v)
        await i18n.changeLanguage(v)
    }

    return (
        <div>
            <DropDown data={langs} current={currentLang} onChange={changeLang} withArrow={false}/>
        </div>
    );
};