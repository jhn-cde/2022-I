import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TareaScreen1 } from './src/screens/TareaScreen1';
import { TareaScreen2 } from './src/screens/TareaScreen2';
import { TareaScreen3 } from './src/screens/TareaScreen3';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TareaScreen3 />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 29
  },
});
