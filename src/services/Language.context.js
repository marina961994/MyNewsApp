import React, { useState, useEffect, createContext } from 'react'
import { useTranslation } from 'react-i18next';


export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
    const [languageValue, setLanguageValue] = useState('en');
    const [isEnglish, setIsEnglish] = useState(true);
    const { i18n } = useTranslation();


    const changeLanguage = (language) => {
        setLanguageValue(language);

        if (language === 'en') {
            setIsEnglish(true);
        } else {
            setIsEnglish(false);
        }
    }

    useEffect(() => {
        i18n.changeLanguage(languageValue);

    }, [languageValue]);

    return (
        <LanguageContext.Provider
            value={{
                isEnglish,
                changeLanguage
            }}>
            {children}
        </LanguageContext.Provider>
    );
}


