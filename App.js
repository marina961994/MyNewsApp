import { StatusBar } from 'expo-status-bar';
import { AppNavigator } from './src/infrastructure/navigation/app.navigator';

import { ThemeProvider } from '@react-navigation/native';
import { theme } from './src/infrastructure/theme';


export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppNavigator />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
