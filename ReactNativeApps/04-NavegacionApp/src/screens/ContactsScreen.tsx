import { useContext } from "react"
import { Button, Text, View } from "react-native"
import { AuthContext } from "../context/AuthContext"
import { styles } from "../theme/appTheme"

export const ContactsScreen = () => {
  const { signIn, signOut, authState } = useContext(AuthContext)

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContactsScreen</Text>
      {
        !authState.isLoggedIn 
        ?<Button
          title='Log In'
          onPress={ signIn }
        />
        :<Button
          title='Log Out'
          onPress={ signOut }
        />
      }
    </View>
  )
}
