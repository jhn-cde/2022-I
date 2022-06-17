import { View, Text } from "react-native"

export const SaludoScreen = () => {
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'blue'
    }}>
      <Text style={{
        fontSize: 50,
        textAlign: 'right',
        color: 'white'
      }}>
        Hola Johan :{')'}
      </Text>
    </View>
  )
}