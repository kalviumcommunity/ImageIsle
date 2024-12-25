import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Auth/Login";
import About from "./Components/About";
import Signup from "./Components/Auth/SignUp";
import Profile from "./Components/Profile";
import EditProfile from "./Components/EditProfile";
import Upload from "./Components/Upload";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit" element={<EditProfile />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  );
}

export default App;
