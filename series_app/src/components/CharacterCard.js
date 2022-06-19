import { Link } from "react-router-dom"

export const CharacterCard = ({
  char_id,
  name,
  occupation,
  img,
  status,
  nickname,
  appearance,
  portrayed,
  category,
  better_call_saul_appearance,
}) => {
  return(
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={ img } alt={ name } className="card-img"/>
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{ name }</h5>
              <p className="card-text">{ nickname }</p>
              <p className="card-text">{ category }</p>
              <p className="card-text">{ occupation }</p>
              <Link to={`/character/${char_id}`}>Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}