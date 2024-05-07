import logo1 from "../assets/logo1.png";
import "./NavCss.css";
import circle from "../assets/circle.png";
import Search from "../assets/search.png";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-flex">
          <img className="logoOne" src={logo1} alt="" />
          <input
            placeholder="Search high-resolution images here"
            type="text"
            className="search"
          />
          <button className="search-btn">
            <img src={Search} alt="" />
          </button>
        </div>
        <div className="details">
          <button className="add">Submit a photo</button>
          <Link to="/about">
            <p>About</p>
          </Link>
          <Link to="/login">
            <p>Log in</p>
          </Link>
          <img className="circle" src={circle} alt="" />
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default Nav;
