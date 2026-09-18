import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import App from "./App"

function RoutesConfig() {
  return (
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/Home' element={<Home/>}/>
    </Routes>
  )
}

export default RoutesConfig