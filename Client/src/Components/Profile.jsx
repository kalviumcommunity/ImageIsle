import circle from "./assets/circle.png";
import down from "./assets/down-arrow.png";
import like from "./assets/like.png";
import upload from "./assets/upload.png";
import back from "./assets/left-arrow.png";
import { Link } from "react-router-dom";
import "./HomeCss.css";

function Profile() {
  return (
    <div>
      <div className="back-btn-container">
        <Link to="/">
          <img id="back-btn-img" src={back} alt="" />
        </Link>
      </div>
      <div className="profile-details">
        <div>
          <img className="profile-icon" src={circle} alt="Profie_pic" />
        </div>
        <div className="user-name">
          <h2>Name</h2>
          <p>I am batman</p>
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
                alt="like_img"
              />
            </div>
            <div className="user-collection">
              <p>Downloads </p>
              <img
                className="user-icons"
                id="user-downloads"
                src={down}
                alt="download_image"
              />
            </div>
            <div className="user-collection">
              <Link to="/upload">
                <p>Uploads </p>
              </Link>
              <img
                className="user-icons"
                id="user-uploads"
                src={upload}
                alt="upload_img"
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Profile;
