import { useNavigation } from '@react-navigation/native'
import {Text, View, Button} from 'react-native'
import {StackScreenProps} from '@react-navigation/stack'
import {styles} from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerScreenProps } from '@react-navigation/drawer'

interface Props extends DrawerScreenProps<any, any>{}

export const Pagina1Screen = ({ navigation }: Props) => {
  return(
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Pagina 1</Text>
      <Button
        title='Ir a pagina 2'
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      <Text style={{}}>Navegar pasando argumentos</Text>
      
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
          <Text  style={ styles.botonGrandeText } >Angela</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}