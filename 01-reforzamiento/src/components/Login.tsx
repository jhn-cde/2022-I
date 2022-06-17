//import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: string|null;
  username: string;
  name: string;
}

const initialState: AuthState ={
  validando: true,
  token: null,
  username: '',
  name: '',
}

type LoginPayload = {
  username: string,
  name: string,
}
type AuthAction =
  |{ type: 'logout' }
  |{ type: 'login', payload: LoginPayload }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type){
    case 'logout': 
      return{
        validando: false,
        token: null,
        username: '',
        name: '',
      }
    case 'login':
      const {username, name} = action.payload
      return{
        validando: false,
        token: 'abc123',
        username: username,
        name: name,
      }
    default:
      return initialState
  }
}

export const Login = () => {
  const [{validando, token, name}, dispatch] = useReducer(authReducer, initialState)
  useEffect(()=>{
    setTimeout(()=>{
      dispatch({type:'logout'})
    }, 1500)
  }, [])
  
  const login = () =>{
    dispatch({
      type:'login',
      payload:{
        username: 'JWilla',
        name: 'Johan',
      }
    })
  }

  const logout = () => {
    dispatch({
      type:'logout'
    })
  }

  if (validando) {
    return(
      <>
        <h3>Login</h3>
        <div className="alert alert-info">
          Validando...
        </div>
      </>
    )
  }

  return(
    <>
      <h3>Login</h3>
      {
        (token)
        ?<div className="alert alert-success"> Autenticado como: {name} </div>
        :<div className="alert alert-danger"> No autenticado... </div>
      }
      {
        (token)
        ?<button
          onClick={logout}
          className="btn btn-danger">
          Logout
        </button>
        
        :<button
          onClick={login}
          className="btn btn-primary">
          Login
        </button>
      }
    </>
  )
}