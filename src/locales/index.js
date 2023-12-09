import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import fr from './fr.json';
import i18next from 'i18next';

export const resources = {
    en: { translation: en },
    fr: { translation: fr }
};

i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'zh',
    fallbackLng: 'en',
    resources,

    interpolation: {
        escapeValue: false
    }
});

export default i18next;