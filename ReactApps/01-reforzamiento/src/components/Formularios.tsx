import { useForm } from "../hooks/useForm";

const Formularios = () => {
  const{email, password, nomUsuario, codigo, onChange} = useForm({
    email: 'nombre@email.dom',
    password: 'password',
    nomUsuario: 'Nombre',
    codigo: '12345'
  })

  return(
    <>
      <h3>Formularios</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={ email }
        onChange={ (e) => onChange(e.target.value, 'email') }
      />
      <input
        type="text"
        className="form-control"
        placeholder="password"
        value={ password }
        onChange={ (e) => onChange(e.target.value, 'password') }
      />
      <input
        type="text"
        className="form-control"
        placeholder="Nombre de usuario"
        value={ nomUsuario }
        onChange={ (e) => onChange(e.target.value, 'nomUsuario') }
      />
      <input
        type="number"
        className="form-control"
        placeholder="Código"
        value={ codigo }
        onChange={ (e) => onChange(e.target.value, 'codigo') }
      />
    </>
  )
}

export default Formularios