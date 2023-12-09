import { StatusBar } from 'expo-status-bar';
import { AppNavigator } from './src/infrastructure/navigation/app.navigator';

import { ThemeProvider } from '@react-navigation/native';



export default function App() {
  return (
    <>
      <ThemeProvider >
        <AppNavigator />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
