import { useRef, useState } from 'react';

enum Operadores {
  sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0')
  const [numero, setNumero] = useState('0')

  const ultimaOperacion = useRef<Operadores>()


  const limpiar = () => {
    setNumero('0')
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

  // borrar
  const borrar = () => {
    let nuevoNumero = numero.substring(0, numero.length-1)
    
    if(nuevoNumero === '' || nuevoNumero === '-') nuevoNumero = '0'

    setNumero(nuevoNumero)
  }

  //
  const cambiarNumPorAnterior = () => {
    if(numero.endsWith('.')){
      setNumeroAnterior(numero.slice(0, -1))
    } else{
      setNumeroAnterior(numero)
    }
    setNumero('0')
  }

  // botones de operacion
  const btnDividir = () => {
    cambiarNumPorAnterior()
    ultimaOperacion.current = Operadores.dividir
  }
  const btnMultiplicar = () => {
    cambiarNumPorAnterior()
    ultimaOperacion.current = Operadores.multiplicar
  }
  const btnRestar = () => {
    cambiarNumPorAnterior()
    ultimaOperacion.current = Operadores.restar
  }
  const btnSumar = () => {
    cambiarNumPorAnterior()
    ultimaOperacion.current = Operadores.sumar
  }

  const calcular = () => {
    const num1 = Number( numeroAnterior )
    const num2 = Number( numero )

    switch ( ultimaOperacion.current ) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`)
        break;
      case Operadores.restar:
        setNumero(`${num1 - num2}`)
        break;
      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`)
        break;
      case Operadores.dividir:
        setNumero(`${num1 / num2}`)
        break;
      default:
        break;
    }
    setNumeroAnterior('0')
  }
  return{
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
    calcular
  }
}
