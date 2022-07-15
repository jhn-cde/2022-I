import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from "react-native"

export const DimedionesScreen = () => {
  const {width, height} = useWindowDimensions()
  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.cajaMorada, width: width*0.2, height: height*0.5}}></View>
        <View style={styles.cajaNaranja}></View>
      </View>
      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 600,
    backgroundColor: 'red',
  },
  cajaMorada: {
    backgroundColor: '#5b56d6',
  },
  cajaNaranja: {
    backgroundColor: '#f0a238',
  },
  title: {
    fontSize: 20,
  },

})