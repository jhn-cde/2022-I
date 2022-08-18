import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Image, SafeAreaView, Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tabs } from './Tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral= () => {
  const {width} = useWindowDimensions()
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false
      }}
      drawerContent = {( props ) => <MenuInterno {...props}/>}
    >
      <Drawer.Screen name="Tabs" component={ Tabs } />
      <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
  return (
  <DrawerContentScrollView contentContainerStyle={{flex: 1}}>
      <View style={{...styles.avatarContainer}}>
        <Image
        source={{
          uri: 'https://images.all-free-download.com/images/graphiclarge/avatar_3_95970.jpg'
        }}
        style={styles.avatar}
        />
        <View style={{...styles.menuContainer}}>
          <TouchableOpacity
            style={{
              ...styles.menuBoton,
              flexDirection: 'row' 
            }}
            onPress={() => navigation.navigate('Tabs')}
          >
            <Ionicons name='compass-outline' size={24} color='black' />
            <Text style={styles.menuTexto} >Navegacion</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={{
              ...styles.menuBoton,
              flexDirection: 'row' 
            }}
            onPress={() => navigation.navigate('SettingsScreen')}
          >
            <Ionicons name='cog-outline' size={24} color='black' />
            <Text style={styles.menuTexto} >Ajustes</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{...styles.copyrightContainer}}>
        <Text style={{...styles.copyrightText}} >&#169;johancde 2022</Text>
      </View>
  </DrawerContentScrollView>
  )
}