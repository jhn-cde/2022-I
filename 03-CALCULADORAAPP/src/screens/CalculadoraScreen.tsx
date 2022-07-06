import { StyleSheet, View, Text } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';
import { styles } from '../theme/appTheme';


export const CalculadoraScreen = () => {
  const {
    numero,
    numeroAnterior,
    armarNumero,
    limpiar,
    borrar,
    positivoNegativo,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora()
  
  return(
    <View style={styles.calculadorContainer}>
      {
        (numeroAnterior !== '0') && (
          <Text style={styles.resultadoPequenio}>
            { numeroAnterior }
          </Text>
        )
      }
      <Text
        style={styles.resultado}
        numberOfLines = {1}
        adjustsFontSizeToFit = {true}
      >
      { numero }
      </Text>
      <View style={styles.fila}>
        <BotonCalc text='C' color='#9b9b9b' accion={limpiar}/>
        <BotonCalc text='+/-' color='#9b9b9b' accion={positivoNegativo}/>
        <BotonCalc text='del' color='#9b9b9b' accion={borrar}/>
        <BotonCalc text='/' color='#ff9427' accion={btnDividir} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text='7' accion={armarNumero}/>
        <BotonCalc text='8' accion={armarNumero}/>
        <BotonCalc text='9' accion={armarNumero}/>
        <BotonCalc text='x' color='#ff9427' accion={btnMultiplicar}/>
      </View>
      <View style={styles.fila}>
        <BotonCalc text='4' accion={armarNumero}/>
        <BotonCalc text='5' accion={armarNumero}/>
        <BotonCalc text='6' accion={armarNumero}/>
        <BotonCalc text='--' color='#ff9427' accion={btnRestar}/>
      </View>
      <View style={styles.fila}>
        <BotonCalc text='1' accion={armarNumero}/>
        <BotonCalc text='2' accion={armarNumero}/>
        <BotonCalc text='3' accion={armarNumero}/>
        <BotonCalc text='+' color='#ff9427' accion={btnSumar}/>
      </View>
      <View style={styles.fila}>
        <BotonCalc text='0' accion={armarNumero} ancho/>
        <BotonCalc text='.' accion={armarNumero}/>
        <BotonCalc text='=' color='#ff9427' accion={calcular}/>
      </View>
    </View>
  )
}