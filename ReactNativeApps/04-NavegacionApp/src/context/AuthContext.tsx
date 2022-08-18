import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

// Definir como luce y que informacion contiene 
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined
}

// lo usaremos para decirle a React como luce y que expone el contexto
export interface AuthContextProps {
  authState: AuthState,
  signIn: () => void,
  signOut: () => void,
  changeFavIcon: (iconName: string) => void,
}

// crear contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState)

  const signIn = () => {
    dispatch({type: 'signIn'})
  }

  const signOut = () => {
    dispatch({type: 'signOut'})
  }
  
  const changeFavIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName})
  }

  return(
    <AuthContext.Provider value={{
      authState,
      signIn,
      signOut,
      changeFavIcon
    }}>
      { children }
    </AuthContext.Provider>
  )
}