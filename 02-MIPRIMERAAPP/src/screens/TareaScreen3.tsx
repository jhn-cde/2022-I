import { View, StyleSheet} from 'react-native';

export const TareaScreen3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada}></View>
      <View style={styles.cajaNaranja}></View>
      <View style={styles.cajaAzul}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    justifyContent: 'center'
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: '#FFF',
    alignSelf: 'flex-end',
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: '#f0A238',
    borderWidth: 10,
    borderColor: '#FFF',
    alignSelf: 'flex-start',
  },
  cajaAzul: {
    width: 100,
    height: 100,
    backgroundColor: '#28C4D9',
    borderWidth: 10,
    borderColor: '#FFF',
    alignSelf: 'center',
  }
})