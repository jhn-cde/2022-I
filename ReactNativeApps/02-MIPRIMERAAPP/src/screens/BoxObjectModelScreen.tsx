import { View, Text, StyleSheet} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hola
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 30,
    borderWidth: 5,
    paddingHorizontal: 100,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginTop: 50,
  }
})