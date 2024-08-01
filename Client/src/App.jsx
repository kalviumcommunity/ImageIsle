import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import Login from "./Components/Login"
import About from "./Components/About"
import Signup from "./Components/Signup"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  )
}

export default App
