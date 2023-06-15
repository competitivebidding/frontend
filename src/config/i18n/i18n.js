import i18next from "i18next";
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from "react-i18next";
i18next
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        backend: {
            addPath: '/locales/ru/{{lng}}/{{ns}}'
        }
    })

export default i18next