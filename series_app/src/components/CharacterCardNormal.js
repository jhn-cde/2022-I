import { Link } from "react-router-dom"

export const CharacterCardNormal = ({
  char_id,
  name,
  birthday,
  occupation,
  img,
  status,
  nickname,
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
              <h5 className="card-title">{ name } <small>({ nickname })</small> </h5>
              <p className="card-text">
                <small className="text-muted">{ birthday }</small>
              </p>
              
              <p className="mt-5">Ocupaciones: {
                occupation.map((elem, i, row) => 
                    (
                      elem+((i+1 === row.length)? '': ', ' )
                    )
                )
              }</p>
              <p>Status: { status }</p>
              <Link to={`/character/${char_id}`}>
                Mas...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>    
  )
}