import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { useEffect } from "react"
import { Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { colores, styles } from "../theme/appTheme";
import Icon from '@expo/vector-icons/Ionicons';
import { TouchableIcon } from "../components/TouchableIcon";

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

        <Icon name='rocket-outline' size={50} color={colores.primary} />
        <Icon name='rocket' size={50} color={colores.primary} />
      </Text>
      <Text>
        {iconsList.map((iconName) => (
            <TouchableIcon key={iconName} iconName={iconName} />
        ))}
      </Text>
    </View>
  )
}