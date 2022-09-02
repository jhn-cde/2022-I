import { DrawerActions, useNavigation } from '@react-navigation/native'
import {Text, View, Button} from 'react-native'
import {StackScreenProps} from '@react-navigation/stack'
import {colores, styles} from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { useEffect } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any, any>{}

export const Pagina1Screen = ({ navigation }: Props) => {
  
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{
            marginLeft: 10,
          }}
          onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }
        >
          <Ionicons name='menu-outline' size={40} color={colores.primary} />
        </TouchableOpacity>
      )
    })
  }, [])

  return(
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Pagina 1</Text>
      <Button
        title='Ir a pagina 2'
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text style={{
        marginVertical: 20,
        marginLeft: 5,
        fontSize: 20,
      }}>Navegar pasando argumentos</Text>
      
      <View 
        style={{
          flexDirection: 'row',
        }}
      >
        <TouchableOpacity
          style={ {
            ...styles.botonGrande,
            backgroundColor: '#5956D6'
          } }
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            name: 'Pedro'
          })}
        >
          <Ionicons name='man-outline' size={50} color='white'/>
          <Text style={ styles.botonGrandeText } >Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={ {
            ...styles.botonGrande,
            backgroundColor: '#FF9427'
          } }
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            name: 'Angela'
          })}
        >
          <Ionicons name='woman-outline' size={50} color='white'/>
          <Text  style={ styles.botonGrandeText } >Angela</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}