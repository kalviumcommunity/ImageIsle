import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import Login from "./Components/Login"
import About from "./Components/About"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
  )
}

export default App
