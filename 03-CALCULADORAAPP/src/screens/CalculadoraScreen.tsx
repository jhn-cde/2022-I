import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';

export const CalculadoraScreen = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0')
  const [numero, setNumero] = useState('0')

  const limpiar = () => {
    setNumero('0')
  }
  const borrar = () => {
    let nuevoNumero = numero.substring(0, numero.length-1)
    
    if(nuevoNumero === '') nuevoNumero = '0'

    setNumero(nuevoNumero)
  }
  // concatenar numeros
  const armarNumero = (numeroTexto: string) => {
    // no aceptar doble o triple numero
    if (numero.includes('.') && numeroTexto === '.') return
    
    //
    if (numero.startsWith('0') || numero.startsWith('-0')){
      //punto decimañ
      if(numeroTexto !== '0' && numeroTexto !== '.' && !numero.includes('.')){
        setNumero(numeroTexto)
        //
      } else if(numeroTexto === '0' && !numero.includes('.')){
        return
        //
      } else{
        setNumero(numero + numeroTexto)
      }
    }
    else{
      setNumero(numero + numeroTexto)
    }
  }
  
  // positivo / negativo
  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-',''))
    } else {
      setNumero('-' + numero)
    }
  }

  return(
    <View style={styles.calculadorContainer}>
      <Text style={styles.resultadoPequenio}>
        { numeroAnterior }
      </Text>
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
        <BotonCalc text='/' color='#ff9427' accion={limpiar}/>
      </View>
      <View style={styles.fila}>
        <BotonCalc text='7' accion={armarNumero}/>
        <BotonCalc text='8' accion={armarNumero}/>
        <BotonCalc text='9' accion={armarNumero}/>
        <BotonCalc text='x' color='#ff9427' accion={limpiar}/>
      </View>
      <View style={styles.fila}>
        <BotonCalc text='4' accion={armarNumero}/>
        <BotonCalc text='5' accion={armarNumero}/>
        <BotonCalc text='6' accion={armarNumero}/>
        <BotonCalc text='--' color='#ff9427' accion={limpiar}/>
      </View>
      <View style={styles.fila}>
        <BotonCalc text='1' accion={armarNumero}/>
        <BotonCalc text='2' accion={armarNumero}/>
        <BotonCalc text='3' accion={armarNumero}/>
        <BotonCalc text='+' color='#ff9427' accion={limpiar}/>
      </View>
      <View style={styles.fila}>
        <BotonCalc text='0' accion={armarNumero} ancho/>
        <BotonCalc text='.' accion={armarNumero}/>
        <BotonCalc text='=' color='#ff9427' accion={limpiar}/>
      </View>
    </View>
  )
}