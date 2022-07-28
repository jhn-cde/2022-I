import { Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';



export const AppRouter = () => {
  return (
    <>

      <Routes>
          
        <Route path="login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />
        
        <Route path="/*" element={ 
          <PivateRoute>
            <HeroesRoutes />
          </PivateRoute>
        } />

      </Routes>
    
    </>
  )
}
