import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import themes from './src/themes';

export default function App() {

  console.log(themes.fonts.showDeviceConfig())

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 48 }}>
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
