import logo1 from "../assets/logo1.png"
import "./NavCss.css"
import circle from "../assets/circle.png"
import Search from "../assets/search.png"
function Nav() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-flex">
          <img className="logoOne" src={logo1} alt="" />
          <input type="text" className="search" />
          <button className="search-btn"><img src={Search} alt="" /></button>
        </div>
        <div className="details">
            <button>Submit a photo</button>
            <p>About</p>
            <p>Log in</p>
            <img className="circle" src={circle} alt="" />
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default Nav;
