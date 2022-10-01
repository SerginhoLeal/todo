// @Themes and Designs
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import theme from './src/themes';

// @Providers
import { TasksProvider } from './src/Contexts/Tasks';
import { ThemeProvider } from 'styled-components/native';

// @Screens
import Home from './src/Screens/Home';

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
      <TasksProvider>
        <Home />
      </TasksProvider>
    </ThemeProvider>
  );
}
