import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "../theme/appTheme"

interface Props {
  text: string,
  color?: string,
  ancho?: boolean,
}

export const BotonCalc = ({text, color='#2d2d2d', ancho=false}: Props) => {
  return(
    <TouchableOpacity>
      <View style={{
        ...styles.boton,
        backgroundColor:color,
        width: ancho? 170 : 80,
      }}>
        <Text style={{
          ...styles.botonTexto,
          color: color === '#8b8b8b' ? 'black' : 'white',
        }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}