import { StatusBar } from 'expo-status-bar';
import { AppNavigator } from './src/navigation/app.navigator';

// import { ThemeContextProvider } from './src/services/Theme.context';
import { LanguageContextProvider } from './src/services/Language.context';
import { SearchContextProvider } from './src/services/Search.context';

export default function App() {
  return (
    <>
      <LanguageContextProvider>
        <SearchContextProvider>
          <AppNavigator />
        </SearchContextProvider>
      </LanguageContextProvider>

      {/* <ThemeContextProvider>
      </ThemeContextProvider> */}
      <StatusBar style="auto" />
    </>
  );
}
