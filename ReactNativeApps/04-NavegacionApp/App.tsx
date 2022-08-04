import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <MenuLateralBasico />
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
