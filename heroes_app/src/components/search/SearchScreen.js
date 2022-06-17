import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

const SearchScreen = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)

  const {searchtext, onChange} = useForm({
    searchtext: q,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <h1>Busquedas</h1>
      <hr/>
      <div className="row">
        <div className="col-3">
          <h4>Buscar</h4>
          <hr/>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar heroe..."
              value={searchtext}
              autoComplete="off"
              onChange={(e) => onChange(e.target.value, 'searchtext')}
            />
            <button
              type="submit"
              className="btn btn-outline-primary btn-block mt-2"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default SearchScreen