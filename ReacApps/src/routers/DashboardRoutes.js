import { Routes, Route } from "react-router-dom"

import Navbar from "../components/ui/Navbar"
import DcScreen from "../components/dc/DcScreen"
import MarvelScreen from "../components/marvel/MarvelScreen"
import SearchScreen from "../components/search/SearchScreen"
import LoginScreen from "../components/login/LoginScreen"
import HeroScreen from "../components/hero/HeroScreen"

const AppRouter = () => {
    return (
      <div>
        <Navbar/>
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<MarvelScreen/>}/>
            <Route path="/hero/:heroeId" element={<HeroScreen/>}/>
            <Route path="/marvel" element={<MarvelScreen/>}/>
            <Route path="/dc" element={<DcScreen/>}/>
            <Route path="/login" element={<LoginScreen/>}/>
            <Route path="/search" element={<SearchScreen/>}/>
          </Routes>
        </div>
      </div>
    )
}

export default AppRouter