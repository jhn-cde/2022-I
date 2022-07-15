interface Direccion {
  pais: string,
  direccion: number  
}

interface Persona{
  nombreCompleto: string
  edad: number
  direccion: Direccion
}

export const ObjetosLiterales = () => {
  
  const persona: Persona = {
    nombreCompleto: 'Willian',
    edad: 36,
    direccion: {
      pais: 'Peru',
      direccion: 240,
    }
  }
  return(
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>
          { JSON.stringify(persona, null, 2) }
        </pre>
      </code>
    </>
  )
}