import { Usuario } from "../typescript/interfaces/reqRes";
import { useUsuarios } from "../hooks/useUsuarios"

const Usuarios = () => {
  const {usuarios, paginaAnterior, paginaSiguiente} = useUsuarios()  

  const renderItem = ({id, email, first_name, last_name, avatar}: Usuario) =>{
    return (
      <tr key={id}>
        <td><img
          src={avatar}
          alt="avatar"
          style={{height: "35px", width: "35px", objectFit: "cover", borderRadius: "100px"}} /></td>
        <td>{first_name} {last_name}</td>
        <td>{email}</td>
      </tr>
    )
  }

  return (
    <>
      <h3>Introducción a TS - React </h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            //usuarios.map( usuario => renderItem(usuario) )
            usuarios.map( renderItem )
          }
        </tbody>
      </table>
      <button onClick={paginaAnterior} className="btn btn-primary">
        &#60;
      </button>
      <button onClick={paginaSiguiente} className="btn btn-primary">
        &#62;
      </button>
      {/*<span> Pag. {paginaRef.current-1} </span>*/}
    </>
  )
}

export default Usuarios;