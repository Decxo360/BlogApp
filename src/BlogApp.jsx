import { AppRouter } from "./router/AppRouter"
import {BrowserRouter} from "react-router-dom"


export const BlogApp = () => {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )
}
