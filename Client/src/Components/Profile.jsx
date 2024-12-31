import { useEffect, useState } from "react";
import circle from "./assets/circle.png";
import down from "./assets/down-arrow.png";
import like from "./assets/like.png";
import upload from "./assets/upload.png";
import back from "./assets/left-arrow.png";
import { Link } from "react-router-dom";
import "./HomeCss.css";

function Profile() {
  const [user, setUser] = useState({ name: "Guest", email: "" });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div>
      <div className="back-btn-container">
        <Link to="/">
          <img id="back-btn-img" src={back} alt="Go back" />
        </Link>
      </div>
      <div className="profile-details">
        <div>
          <img className="profile-icon" src={user.photo || circle}  alt="Profile" />
        </div>
        <div className="user-name">
          <h2>{user.name || "Name"}</h2>
          <p>{user.email || "No email provided"}</p>
        </div>
        <div className="user-button">
          <Link to="/edit">
            <button>Edit Profile</button>
          </Link>
        </div>
      </div>
      <hr />
      <div>
        <nav>
          <div className="user-collection-container">
            <div className="user-collection">
              <p>Likes</p>
              <img
                className="user-icons"
                id="user-likes"
                src={like}
                alt="Likes"
              />
            </div>
            <div className="user-collection">
              <p>Downloads</p>
              <img
                className="user-icons"
                id="user-downloads"
                src={down}
                alt="Downloads"
              />
            </div>
            <div className="user-collection">
              <Link to="/upload">
                <p>Uploads</p>
              </Link>
              <img
                className="user-icons"
                id="user-uploads"
                src={upload}
                alt="Uploads"
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Profile;
