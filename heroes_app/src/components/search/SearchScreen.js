import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { getHeroByName } from '../../selector/getHeroByName'
import { HeroCard } from '../hero/HeroCard'

const SearchScreen = () => {
  const queryString = require('query-string')
  const navigate = useNavigate()
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)

  const [ value, handleInputChange ] = useForm({
    searchtext: q,
  })

  const { searchtext } = value
  const heroFiltered = useMemo(() => getHeroByName(q), [q])

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`?q=${searchtext}`)
  }

  return (
    <div>
      <h1>Busquedas</h1>
      <hr/>
      <div className="row">
        <div className="col-3">
          <h4>Buscar</h4>
          <hr/>
          <form onSubmit={ handleSearch }>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar heroe..."
              name="searchtext"
              autoComplete="off"
              value={ searchtext }
              onChange={ handleInputChange }
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-2"
            >
              Buscar ...
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Resultado</h4>
          <hr/>
          {
            (q === '')
            ? <div className="alert alert-info"> Buscar un heroe </div>
            : ( heroFiltered.length === 0 )
              && <div className="alert alert-danger"> No hay resultados para: {q} </div>
          }
          {
            heroFiltered.map(hero => (
              <HeroCard
                key={ hero.id }
                { ...hero }
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default SearchScreen