import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../../src/auth'
import { PublicRoute } from '../../src/router/PublicRoute'
describe('Pruebas en el PublicRoute', () => {
  test('Debe de mostrar children si no está autenticado', () => {
    const contextValue = {
      logged: false
    }
    render(
      <AuthContext.Provider value = {contextValue}>
        <PublicRoute>
          <h1>Ruta publica</h1>
        </PublicRoute>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Ruta publica')).toBeTruthy()
  })

  test('Debe de navegar si no está autenticado', () => {
    const contextValue = {
      logged: true,
      user: {
        name: 'Benito',
        id: '007'
      }
    }
    render(
      <AuthContext.Provider value = {contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path='login' element={
              <PublicRoute>
                <h1>Ruta publica</h1>
              </PublicRoute>
            }/>
            <Route path='' element={<h1>Pagina principal!</h1>}/>
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Pagina principal!')).toBeTruthy()
  })
})