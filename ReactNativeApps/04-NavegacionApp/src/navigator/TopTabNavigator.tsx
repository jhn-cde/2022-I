import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { colores } from '../theme/appTheme';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top: paddingTop} = useSafeAreaInsets()
  return (
    <Tab.Navigator
      style={{paddingTop}}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({ route }) => ({
        tabBarIcon({color, focused}) {
          let iconName: string
          switch (route.name) {
            case 'Chat':
              iconName = 'chatbubbles'
              break;
            case 'Albums':
              iconName = 'clipboard'
              break;
            case 'Contacts':
              iconName = 'people'
              break;
            default:
              iconName = 'chatbubbles'
              break;
          }

          return  (<Text style={{color}} >
                    <Ionicons name={iconName} size={24} color='green' />
                  </Text>) 
        },
        tabBarStyle:{
          borderTopColor: colores.primary,
          shadowColor: 'transparent'
        },
      })
        /*tabBarIndicatorStyle:{
          backgroundColor: colores.primary
        },
        tabBarStyle:{
          borderTopColor: colores.primary,
          shadowColor: 'transparent'
        },
        tabBarShowIcon: true,
        tabBarPressColor: colores.primary*/
      }
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
    </Tab.Navigator>
  );
}