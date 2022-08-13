import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { useEffect } from "react"
import { Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { colores, styles } from "../theme/appTheme";
import Ionicons from '@expo/vector-icons/Ionicons';

const iconsList = [
  'play-circle', 'radio', 'musical-notes-outline',
  'code-slash-outline', 'moon', 'pause-circle-outline',
  'airplane',  'camera-outline', 'battery-charging',
  'git-commit-outline'
]

export const Tab1Screen = () => {
  const {top: paddingTop} = useSafeAreaInsets()

  //useEffect(() => {
  //  console.log(paddingTop)
  //}, [])
  return(
    <View
      style = {{...styles.globalMargin,paddingTop}}
    >
      <Text style={styles.title}>Iconos</Text>
      <Text>

        <Ionicons name='rocket-outline' size={50} color={colores.primary} />
        <Ionicons name='rocket' size={50} color={colores.primary} />
      </Text>
      <Text>
        {iconsList.map((iconName: String) => (
          <Ionicons key={iconName} name={iconName} size={50} color={colores.primary} />
        ))}
      </Text>
    </View>
  )
}