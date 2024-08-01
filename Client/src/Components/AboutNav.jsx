import logo1 from "../assets/logo1.png";
import circle from "../assets/circle.png";
import Search from "../assets/search.png";
import { Link } from "react-router-dom";
import "./NavCss.css";
function AboutNav() {
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
            <p id="add">+</p>
            </button>
          <Link to="/" id="nav-link">
            <p>Home</p>
          </Link>
          <Link to="/login" id="nav-link">
            <p>Login</p>
          </Link>
          <img src={circle} alt="profile" id="profile-icon" />
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default AboutNav;
