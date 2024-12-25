import { Link } from "react-router-dom";

const DropDown = () => {
  return (
    <div className="drop-down">
      <ul className="drop-down-list">
        <Link to="/profile">
          <li id="pro">Profile</li>
        </Link>
        <li id="logoutBtn" onClick={()=>{
          localStorage.clear()
          location.reload()
        }}>Logout</li>
      </ul>
    </div>
  );
};
export default DropDown;
