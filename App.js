import { StatusBar } from 'expo-status-bar';
import { AppNavigator } from './src/navigation/app.navigator';

import { ThemeProvider } from '@react-navigation/native';

import { LanguageContextProvider } from './src/services/Language.context';

export default function App() {
  return (
    <>
      <ThemeProvider >
        <LanguageContextProvider>
          <AppNavigator />
        </LanguageContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
