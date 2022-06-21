import {Routes, Route } from "react-router-dom"
import { HomeScreen } from "../components/HomeScreen"

import { NavBar } from "../components/ui/NavBar"


export const AppRouter = () => {
  return (
      <div>
        <NavBar />
        <Routes>
          <Route path="*" element={<HomeScreen/>} />
        </Routes>
      </div>
  )
}
