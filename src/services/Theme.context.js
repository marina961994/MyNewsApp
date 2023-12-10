import React, { useState, useEffect, createContext } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';


export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const THEME_KEY = "theme";

    const [theme, setTheme] = useState('light');

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
        AsyncStorage.setItem(THEME_KEY, newTheme);
    }

    useEffect(() => {
        const loadActiveTheme = async () => {
            try {
                const currentTheme = await AsyncStorage.getItem(THEME_KEY);
                if (currentTheme) {
                    setTheme(currentTheme);
                }

            } catch (error) {
                console.log('SomeThing went wrong :', error)
            }
        };

        loadActiveTheme();

    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                changeTheme
            }}>
            {children}
        </ThemeContext.Provider>
    );


}


