import { Link } from "react-router-dom"

export const CharacterCardOverlay = ({
  char_id,
  name,
  birthday,
  occupation,
  img,
}) => {
  return(
    <div className="col animate__animated animate__fadeIn col-sm-12 col-md-6 col-lg-4 mb-4">
      <div
        className="card text-white card-has-bg click-col"
        style={{...styles.card, backgroundImage: "url('"+img+"')"}}>
        <img src={ img } alt={ name } className="card-img d-none"/>
        <div className="card-img-overlay d-flex flex-column" style={styles.overlay}>
          <div className="card-body">
            <h4 className="card-title">{ name }</h4>
            <small className="card-text">{ birthday }</small>
          </div>
          <div className="card-footer" style={styles.footer}>
            <div className="media-body">
              {
                occupation.map((elem, i, row) => {
                  return(
                    <small className="card-text" key={elem}>
                      {elem}{(i+1 === row.length)? '': ', ' }
                    </small>
                  )
                })
              }
              <Link to={`/character/${char_id}`}><p className="link-info">Mas...</p></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  card: {
    height: '300px',
    backgroundSize: 'cover'
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.5)',
  },
  footer: {
    border: 'none'
  }
}