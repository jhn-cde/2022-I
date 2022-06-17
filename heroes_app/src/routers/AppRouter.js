import { Routes, Route, BrowserRouter } from "react-router-dom"

import DashboardRoutes from "./DashboardRoutes"
import LoginScreen from "../components/login/LoginScreen"

const AppRouter = () => {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginScreen/>}/>
            <Route path="*" element={<DashboardRoutes/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
}

export default AppRouter