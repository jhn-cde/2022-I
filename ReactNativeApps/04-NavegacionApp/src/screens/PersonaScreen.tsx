import { StackScreenProps } from '@react-navigation/stack'
import { useEffect } from 'react'
import { Text, View} from 'react-native'
import { RootStackParams } from '../navigator/StackNavigator'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{}

export const PersonaScreen = ({route, navigation }: Props) => {
  const params = route.params

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    })
  }, [])

  return(
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
        {
          JSON.stringify(params, null, 3)
        }
      </Text>
    </View>
  )

}