import React, { useState, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppNavigator } from './src/navigation/app.navigator';

import { LanguageContextProvider } from './src/services/Language.context';
import { SearchContextProvider } from './src/services/Search.context';

import { NavigationContainer } from '@react-navigation/native'

import DarkTheme from './src/theme/DarkTheme';
import DefaultTheme from './src/theme/DefaultTheme';

import { AppContext } from './src/services/AppContext';


export default function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const appContext = useMemo(() => {
    return {
      isDarkTheme,
      setIsDarkTheme
    }
  });

  return (
    <>
      <StatusBar style={isDarkTheme ? 'light' : 'dark'} />
      <LanguageContextProvider>
        <SearchContextProvider>
          <NavigationContainer theme={isDarkTheme ? DarkTheme : DefaultTheme}>

            <AppContext.Provider value={appContext}>
              <AppNavigator />
            </AppContext.Provider>

          </NavigationContainer>
        </SearchContextProvider>
      </LanguageContextProvider>
    </>
  );
}
