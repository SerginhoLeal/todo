import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/themes';

import Routes from './src/Screens';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if(!fontsLoaded){
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
