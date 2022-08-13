import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Platform, Text, TouchableOpacity, View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Tab1Screen } from '../screens/Tab1Screen'
import { Tab2Screen } from '../screens/Tab2Screen'
import { Tab3Screen } from '../screens/Tab3Screen'
import { colores } from '../theme/appTheme'
import { StackNavigator } from './StackNavigator'
import { TopTabNavigator } from './TopTabNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios'
          ? <TabsIOS/>
          : <TabsAndroid/>
}

const TabIos = createBottomTabNavigator()
const TabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return(
    <TabAndroid.Navigator
      sceneAnimationEnabled = {true}
      barStyle = {{
        backgroundColor: colores.primary
      }}
      screenOptions={({ route }) => ({
        tabBarIcon({color, focused}) {
          let iconName: string
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1'
              break;
            case 'TopTabNavigator':
              iconName = 'T2'
              break;
            case 'StackNavigator':
              iconName = 'St'
              break;
            default:
              iconName = 'T'
              break;
          }

          return <Text style={{color}}>{iconName}</Text> 
        }
      })}
    >
      <TabAndroid.Screen name="Tab1Screen" options={{title: 'tab1'}} component={Tab1Screen}/>
      <TabAndroid.Screen name="TopTabNavigator" component={TopTabNavigator}/>
      <TabAndroid.Screen name="StackNavigator" component={StackNavigator}/>
    </TabAndroid.Navigator>
  )
}

const TabsIOS = () => {
  return(
    <TabIos.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={({ route }) => ({
        tabBarIcon({color, focused, size}) {
          let iconName: string
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1'
              break;
            case 'TopTabNavigator':
              iconName = 'T2'
              break;
            case 'StackNavigator':
              iconName = 'St'
              break;
            default:
              iconName = 'T'
              break;
          }

          return <Text style={{color}}>{iconName}</Text> 
        }
      })}
    >
      <TabIos.Screen name="Tab1Screen" options={{title: 'tab1'}} component={Tab1Screen}/>
      <TabIos.Screen name="TopTabNavigator" component={TopTabNavigator}/>
      <TabIos.Screen name="StackNavigator" component={StackNavigator}/>
    </TabIos.Navigator>
  )
}