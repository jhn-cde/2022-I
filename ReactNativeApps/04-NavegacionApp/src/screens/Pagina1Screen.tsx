import { useNavigation } from '@react-navigation/native'
import {Text, View, Button} from 'react-native'
import {StackScreenProps} from '@react-navigation/stack'
import {styles} from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props extends StackScreenProps<any, any>{}

export const Pagina1Screen = ({ navigation }: Props) => {
  return(
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Pagina 1</Text>
      <Button
        title='Ir a pagina 2'
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      <Text style={{}}>Navegar pasando argumentos</Text>
      
      <TouchableOpacity
        onPress={() => navigation.navigate('PersonaScreen', {
          id: 1,
          name: 'Pedro'
        })}
      >
        <Text>Pedro</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('PersonaScreen', {
          id: 1,
          name: 'Angela'
        })}
      >
        <Text>Angela</Text>
      </TouchableOpacity>
    </View>
  )
}