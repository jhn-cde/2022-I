import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateral } from './src/navigator/MenuLateral';
import { Tabs } from './src/navigator/Tabs';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppState>
          {/*<MenuLateral />*/}
          <MenuLateral />
        </AppState>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}


const AppState = ({children}:any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}