import "./LoginCss.css";
import back from "../assets/left-arrow.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4050/login", { email, password })
      .then((res) => {
        console.log(res);
        if (res.data === "Success") {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="back-btn-container">
        <Link to="/">
          <img id="back-btn-img" src={back} alt="" />
        </Link>
        <div className="login-welcome">
          <h1>
            Welcome to <span id="login-title">imageisle</span>
          </h1>
        </div>
        <div className="login-form-container">
          <form onSubmit={handleSubmit} action="" className="login-form">
            <div className="login-text">
              <p>
                <span id="login-text-login">login</span> to continue,
              </p>
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
              {/* <label htmlFor="">Password: </label> */}
              <input
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </div>
            <div>
              <p>
                Don't have an account? I got u. <Link to="/signup">SignUp</Link>
              </p>
            </div>
            <div className="login-btn-container">
              <button id="login-btn">Let's goooo →</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
