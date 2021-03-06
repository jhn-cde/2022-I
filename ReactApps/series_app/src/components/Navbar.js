import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return(
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark" style={{padding: '10px'}}>
      <Link className='navbar-brand' to='/'>
        Series
      </Link>
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({isActive}) => "nav-item nav-link " + (isActive ? 'active' : '')} 
            to="/bb">
            Breaking Bad
          </NavLink>
          <NavLink
            className={({isActive}) => "nav-item nav-link " + (isActive ? 'active' : '')}
            to="/bcs">
              Better Call Saul
          </NavLink>
          <NavLink
            className={({isActive}) => "nav-item nav-link " + (isActive ? 'active' : '')}
            to="/search">
              Buscar
          </NavLink>
        </div>
      </div>
      <div className="navbar-collapse collapse order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className='nav-item nav-link text-info'>
            Johan
          </span>
          <NavLink
            className="btn nav-link" 
            to="/login"
          >
            Logout
          </NavLink>
        </ul>
      </div>
    </nav>
  )
}