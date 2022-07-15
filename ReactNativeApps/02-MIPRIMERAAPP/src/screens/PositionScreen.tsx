import { View, Text, StyleSheet} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada}></View>
      <View style={styles.cajaNaranja}></View>
      <View style={styles.cajaVerde}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#28c4D9',
    width: 400,
    height: 400
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#5b56d6',
    borderWidth: 5,
    borderColor: '#fff',
    position: 'absolute',
    right: 25,
    top: 25,
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: '#f0a238',
    borderWidth: 5,
    borderColor: '#fff',
    position: 'absolute',
    right: 25,
    bottom: 25
  },
  cajaVerde: {
    width: 100,
    height: 100,
    backgroundColor: '#10a238',
    borderWidth: 5,
    borderColor: '#fff',
    position: 'absolute',
    left: 25,
    bottom: 25
  }
})