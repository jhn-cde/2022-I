import { useNavigation } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'


interface Props extends StackScreenProps<any, any>{}

export const Pagina2Screen = ({ navigation }: Props) => {
  const navigator = useNavigation()

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Mundo!',
    })
  }, [])

  return(
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 2</Text>

      <Button
        title='Ir a pagina 3'
        onPress={ () => navigation.navigate('Pagina3Screen')}
      />
    </View>
  )

}