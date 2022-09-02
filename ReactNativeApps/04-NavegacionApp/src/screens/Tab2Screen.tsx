import { useEffect } from "react"
import { Text, View } from "react-native"

export const Tab2Screen = () => {
  useEffect(() => {
    console.log('tab1')
  }, [])
  return(
    <View>
      <Text> Tab 2 </Text>
    </View>
  )
}