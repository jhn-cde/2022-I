import { View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';

interface Props{
  title: string;
  position?: 'br' | 'bl' | 'tr' | 'tl';
  onPress: () => void;
}

export const Fab = ({title, onPress, position = 'br'}: Props) => {
  return(
    <View
      style={[
        styles.fabLocation,
        position[1] === 'r'
          ? styles.right
          : styles.left,
        position[0] === 'b'
          ? styles.bottom
          : styles.top
      ]}
    >
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('black', false, 30)}
        onPress={onPress}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>
            {title}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
  },
  top: {
    top: 25,
  },
  bottom: {
    bottom: 25
  },
  left: {
    left: 25,
  },
  right: {
    right: 25,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  fabText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  }
})