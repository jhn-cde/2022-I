import { ContadorScreen } from './src/screens/ContadorScreen';
import { View, Text, StyleSheet, TouchableNativeFeedback, SafeAreaView} from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { DimedionesScreen } from './src/screens/DimensionesScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TareaScreen/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 28,
  }
})