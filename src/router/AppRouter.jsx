import {Routes, Route } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { HomeScreen } from "../components/HomeScreen"

import { NavBar } from "../components/ui/NavBar"


export const AppRouter = () => {
  return (
      <div>
        <Routes>
          <Route path="*" element={<HomeScreen/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </div>
  )
}
