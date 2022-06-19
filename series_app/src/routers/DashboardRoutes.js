import { Routes, Route } from "react-router-dom"

import { Navbar } from "../components/Navbar"
import { BbScreen } from '../pages/BbScreen'
import { BcsScreen } from '../pages/BcsScreen'
import { CharacterScreen } from '../pages/CharacterScreen'
import { LoginScreen } from '../pages/LoginScreen'
import { SearchScreen } from '../pages/SearchScreen'

export const DashboardRoutes = () => {
  return(
    <>
      <Navbar/>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<BbScreen/>}/>
          <Route path="/character/:characterId" element={<CharacterScreen/>}/>
          <Route path="/bb" element={<BbScreen/>}/>
          <Route path="/bcs" element={<BcsScreen/>}/>
          <Route path="/login" element={<LoginScreen/>}/>
          <Route path="/search" element={<SearchScreen/>}/>
        </Routes>
      </div>
    </>
  )
}