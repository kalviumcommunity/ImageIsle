import logo1 from "../assets/logo1.png";
import circle from "../assets/circle.png";
import Search from "../assets/search.png";
import { Link } from "react-router-dom";
import "./NavCss.css";
import { useEffect, useRef, useState } from "react";
function Nav() {
  const [link,setlink]=useState()
  const wid=useRef(null)
  useEffect(()=>{
    let myWidget = cloudinary.createUploadWidget({
      cloudName: 'dfgoxzfzy', 
      uploadPreset: 'raahul'}, (error, result) => { 
        if (!error && result && result.event === "success") { 
          console.log('Done! Here is the image info: ', result.info);
          setlink(result.info.secure_url) 
        }
      }
    )
    wid.current= myWidget
  },[])

  return (
    <div>
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/">
            <img src={logo1} alt="logo" id="logo" />
          </Link>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search images here"
            id="search-input"
          />
          <button id="search-btn">
            <img src={Search} alt="search-btn" id="search-img" />
          </button>
        </div>
        <div className="user-container">
          <button id="add-img">
            <p id="add" onClick={()=>{
    wid.current.open();
  }}>+</p>
            </button>
          <Link to="/login" id="nav-link">
            <p>Login</p>
          </Link>
          <Link to="/about" id="nav-link">
            <p>About</p>
          </Link>
          <img src={circle} alt="profile" id="profile-icon" />
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default Nav;
