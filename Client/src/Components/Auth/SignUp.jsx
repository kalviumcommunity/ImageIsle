import "./SignUp.css";
import back from "../assets/left-arrow.png";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Googleauth from "../Firebase/Firbase";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [link, setlink] = useState();

    const wid = useRef(null);
  
    useEffect(() => {
      let myWidget = cloudinary.createUploadWidget(
        {
          cloudName: "dfgoxzfzy",
          uploadPreset: "raahul",
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            setlink(result.info.secure_url);
          }
        }
      );
      wid.current = myWidget;
    }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4050/register", { name, email, password,photo:link })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="back-btn-container">
        <Link to="/">
          <img id="back-btn-img" src={back} alt="" />
        </Link>
        <div className="sign-welcome">
          <h1>
            Welcome to <span id="sign-title">imageisle</span>
          </h1>
        </div>
        <div className="sign-form-container">
          <form onSubmit={handleSubmit} action="" className="sign-form">
            <div className="sign-text">
              <p>
                <span id="sign-text-sign">SignUp</span> to continue,
              </p>
            </div>
            <div>
              <input
                type="text"
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              {/* <label htmlFor="">Email: </label> */}
              <input
                placeholder="E-mail"
                className="input-emailbx"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
            <button
              id="add-img"
              onClick={() => {
                wid.current.open();
              }}
            >
              <p id="add">Upload Your Photo</p>
            </button>
          </div>
            <div>
              <Googleauth mode="/sign" />
            </div>
            <div>
              {/* <label htmlFor="">Password: </label> */}
              <input
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="sign-btn-container">
              <button id="sign-btn">Let's goooo →</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
