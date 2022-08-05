import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export const MenuLateral= () => {
  const {width} = useWindowDimensions()
  return (
    <Drawer.Navigator
      drawerType={width>= 770? 'permanent':'front'}
      drawerContent = {( props ) => <MenuInterno {...props}/>}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
  return (
  <DrawerContentScrollView style={{flex: 1, flexDirection: 'row', backgroundColor:'green'}}>
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={styles.avatarContainer}>
        <Image
        source={{
          uri: 'https://images.all-free-download.com/images/graphiclarge/avatar_3_95970.jpg'
        }}
        style={styles.avatar}
        />
      </View>
      <View style={styles.menuContainer}>
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

      <View style={styles.copyrightContainer}>
        <Text style={{...styles.copyrightText, flex:1}} >&#169;johancde 2021</Text>
      </View>
    </View>
  </DrawerContentScrollView>
  )
}