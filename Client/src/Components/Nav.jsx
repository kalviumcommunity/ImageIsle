import logo1 from "./assets/logo1.png";
import circle from "./assets/circle.png";
import Search from "./assets/search.png";
import { Link } from "react-router-dom";
import axios from "axios";
import "./NavCss.css";
import { useEffect, useRef, useState } from "react";
import DropDown from "./DropDown";
function Nav() {
  const [link, setlink] = useState();
  const wid = useRef(null);
  const [openProfile, setOpenProfile] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    let myWidget = cloudinary.createUploadWidget(
      {
        cloudName: "dfgoxzfzy",
        uploadPreset: "raahul",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          axios.post("http://localhost:4050/post", {
            user: "raahul",
            link: result.info.secure_url,
          });
          setlink(result.info.secure_url);
        }
      }
    );
    wid.current = myWidget;
  }, []);

  useEffect(() => {
    const email = localStorage.getItem("userId");
    if (email) {
      setIsAuthenticated(true);
    }
  }, []);

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
          <div>
            <button
              id="add-img"
              onClick={() => {
                wid.current.open();
              }}
            >
              <p id="add">+</p>
            </button>
          </div>
          <div>
            {!isAuthenticated && (
              <div>
                <Link to="/login" id="nav-link">
                  <p>Login</p>
                </Link>
              </div>
            )}
          </div>
          <div>
            <Link to="/about" id="nav-link">
              <p>About</p>
            </Link>
          </div>
          <div>
            <img
              src={circle}
              onClick={() => setOpenProfile((prev) => !prev)}
              alt="profile"
              id="profile-icon"
            />
          </div>
        </div>
        {openProfile && <DropDown />}
      </nav>
    </div>
  );
}

export default Nav;
