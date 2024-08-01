import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import Login from "./Components/Login"
import About from "./Components/About"
import Signup from "./Components/Signup"
import Profile from "./Components/Profile"
import Add from "./Components/Add"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/add" element={<Add/>}/>
    </Routes>
  )
}

export default App
