import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Image, SafeAreaView, Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export const MenuLateral= () => {
  const {width} = useWindowDimensions()
  return (
    <Drawer.Navigator
      drawerContent = {( props ) => <MenuInterno {...props}/>}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
  return (
  <DrawerContentScrollView contentContainerStyle={{...styles.customDrawer}}>
      <SafeAreaView style={{...styles.avatarContainer}}>
        <Image
        source={{
          uri: 'https://images.all-free-download.com/images/graphiclarge/avatar_3_95970.jpg'
        }}
        style={styles.avatar}
        />
        <View style={{...styles.menuContainer}}>
          <TouchableOpacity
            style={styles.menuBoton}
            onPress={() => navigation.navigate('StackNavigator')}
          >
            <Text style={styles.menuTexto} >Navegacion</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.menuBoton}
            onPress={() => navigation.navigate('SettingsScreen')}
          >
            <Text style={styles.menuTexto} >Ajustes</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View style={{...styles.copyrightContainer}}>
        <Text style={{...styles.copyrightText}} >&#169;johancde 2021</Text>
      </View>
  </DrawerContentScrollView>
  )
}