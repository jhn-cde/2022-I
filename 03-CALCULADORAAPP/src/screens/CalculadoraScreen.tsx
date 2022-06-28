import { StyleSheet, View, Text } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';

export const CalculadoraScreen = () => {
  return(
    <View style={styles.calculadorContainer}>
      <Text style={styles.resultadoPequenio}>
        1,500.00
      </Text>
      <Text style={styles.resultado}>
        1,500.00
      </Text>
      <View style={styles.fila}>
        <BotonCalc text='C' color='#9b9b9b'/>
        <BotonCalc text='+/-' color='#9b9b9b'/>
        <BotonCalc text='%' color='#9b9b9b'/>
        <BotonCalc text='/' color='#ff9427'/>
      </View>
      <View style={styles.fila}>
        <BotonCalc text='7' color='#2d2d2d'/>
        <BotonCalc text='8' color='#2d2d2d'/>
        <BotonCalc text='9' color='#2d2d2d'/>
        <BotonCalc text='x' color='#ff9427'/>
      </View>
      <View style={styles.fila}>
        <BotonCalc text='4' color='#2d2d2d'/>
        <BotonCalc text='5' color='#2d2d2d'/>
        <BotonCalc text='6' color='#2d2d2d'/>
        <BotonCalc text='--' color='#ff9427'/>
      </View>
      <View style={styles.fila}>
        <BotonCalc text='1' color='#2d2d2d'/>
        <BotonCalc text='2' color='#2d2d2d'/>
        <BotonCalc text='3' color='#2d2d2d'/>
        <BotonCalc text='+' color='#ff9427'/>
      </View>
      <View style={styles.fila}>
        <BotonCalc text='0' color='#2d2d2d' ancho/>
        <BotonCalc text='.' color='#2d2d2d'/>
        <BotonCalc text='=' color='#ff9427'/>
      </View>
    </View>
  )
}