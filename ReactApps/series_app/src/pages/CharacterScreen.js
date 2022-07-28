import { useMemo } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getCharacterById } from "../selector/getCharacterById"

export const CharacterScreen = () => {
  const { charId } = useParams()
  const navigate = useNavigate()

  const character = useMemo(() => getCharacterById(charId), [charId])

  const handleReturn = () => {
    navigate(-1)
  }

  if (!character) {
    return <Navigate to='/' />
  }

  const {
    name,
    birthday,
    occupation,
    img,
    status,
    nickname,
    appearance,
    portrayed,
    better_call_saul_appearance,
  } = character

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={ img }
          alt={ name }
          className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>
      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{name}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Nickname: </b> { nickname } </li>
          <li className="list-group-item"> <b>Fecha de nacimiento: </b> { birthday } </li>
          <li className="list-group-item"> <b>Ocupaciones: </b>
          { customMap(occupation, '') }
          </li>
          {appearance.length !== 0
            ?<li className="list-group-item">
              <b>Apariciones en Breaking Bad: </b>
              { customMap(appearance, 'Temp ') }
            </li>
            :<></>
          }
          {better_call_saul_appearance.length !== 0
            ?<li className="list-group-item">
              <b>Apariciones en Better Call Saul: </b>
              { customMap(better_call_saul_appearance, 'Temp ') }
            </li>
            :<></>
          }
          <li className="list-group-item"> <b>Estado: </b> { status } </li>
        </ul>
        <h5 className="mt-3">Actor</h5>
        <p>{ portrayed }</p>
        <button
          className="btn btn-outline-info"
          onClick={handleReturn}>
            Regresar
        </button>
      </div>
    </div>
  )
}

const customMap = (arr, text) => {
  return arr.map(item => `${text} ${item}`).join(', ')
}