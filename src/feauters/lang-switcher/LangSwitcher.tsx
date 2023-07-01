import React from 'react';
import {DropDown} from "shared/ui/dropdown/DropDown";
import {useTranslation} from "react-i18next";

import  UsIcon from '@assets/cabinet/dropdown/US.svg'
import ru from '@assets/cabinet/dropdown/RU.svg'
import ua from '@assets/cabinet/dropdown/UA.svg'

export const langs = [
    {label: <img src={ua} key={'ua'}/>, value: 'ua',},
    {label: <img src={ru} key={'ru'}/>, value: 'ru',},
    {label: <img src={UsIcon} key={'en'}/>, value: 'en',},
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
