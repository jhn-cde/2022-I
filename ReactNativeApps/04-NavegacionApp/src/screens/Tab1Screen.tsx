import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { useEffect } from "react"
import { Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Ionicons from '@expo/vector-icons/Ionicons';
import { colores, styles } from "../theme/appTheme";

export const Tab1Screen = () => {
  const {top: paddingTop} = useSafeAreaInsets()

  //useEffect(() => {
  //  console.log(paddingTop)
  //}, [])
  return(
    <View
      style = {{paddingTop}}
    >
      <Text style={styles.title}> Tab 1 </Text>
      <Text>
        <Ionicons name='rocket-outline' size={50} color={colores.primary} />
        <Ionicons name='rocket' size={50} color={colores.primary} />
      </Text>
    </View>
  )
}