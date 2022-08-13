import { authReducer, types } from '../../../src/auth'

describe('Pruebas en el authReducer', () => {
  test('Debe de retornar el estado por defecto', () => {
    const state = authReducer({logged: false}, {})
    expect(state).toEqual({logged: false})
  })

  test('/login debe de llamar a login, autenticar y establecer al user', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Ale',
        id: '322'
      }
    }

    const state = authReducer({logged: false}, action)
    expect(state).toEqual({
      logged: true,
      user: action.payload
    })
  })

  test('/logout debe de borrar el name del user y dejar logged en false', () => {
    const state = {
      logged:  true,
      user: {id: '404', name: 'Angela'}
    }
    const action = {
      type: types.logout,
      payload: null
    }

    const newState = authReducer(state, action)
    expect(newState).toEqual({ logged: false })
  })
})