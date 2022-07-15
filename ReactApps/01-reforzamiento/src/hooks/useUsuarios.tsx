import { useEffect, useRef, useState } from "react";
import { reqRestAPI } from "../api/reqRes";
import { ReqResListado, Usuario } from "../typescript/interfaces/reqRes";

export const useUsuarios = (initial: number = 0) => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
    
  const paginaRef = useRef(1)

  useEffect(() => {
    cargarUsuarios()
  }, [])


  const cargarUsuarios = async() => {
    if(paginaRef.current < 1){
      paginaRef.current = 1
    }
    const resp = await reqRestAPI.get<ReqResListado>('/users',{
      params: {
        page: paginaRef.current
      }
    })

    if (resp.data.data.length > 0) {
      setUsuarios(resp.data.data)
    } else {
      paginaRef.current--
      alert("No hay mas usuarios")
    }
  }
  const paginaSiguiente = () => {
    paginaRef.current++
    cargarUsuarios()
  }
  const paginaAnterior = () => {
    paginaRef.current--
    cargarUsuarios()
  }

  return{
    usuarios,
    paginaSiguiente,
    paginaAnterior
  }
}
