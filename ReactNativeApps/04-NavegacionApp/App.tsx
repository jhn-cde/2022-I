import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateral } from './src/navigator/MenuLateral';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <MenuLateral />
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
