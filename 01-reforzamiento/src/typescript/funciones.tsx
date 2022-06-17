interface Direccion {
  pais: string,
  direccion: number  
}

interface Persona{
  nombreCompleto: string
  edad: number
  direccion: Direccion
}

export const Funciones = () => {
  const sumar = (a: number, b: number): number =>{
    return a+b
  }
  return(
    <>
      <h3>Funciones</h3>
      <span>El resultado es {sumar(2, 3)}</span>
    </>
  )
}