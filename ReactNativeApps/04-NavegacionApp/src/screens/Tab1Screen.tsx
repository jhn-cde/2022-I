import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { useEffect } from "react"
import { Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export const Tab1Screen = () => {
  const {top: paddingTop} = useSafeAreaInsets()

  useEffect(() => {
    console.log(paddingTop)
  }, [])
  return(
    <View
      style = {{paddingTop}}
    >
      <Text> Tab 1 </Text>
    </View>
  )
}