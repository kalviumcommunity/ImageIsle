import "./LoginCss.css";
import back from "../assets/left-arrow.png";
import { Link } from "react-router-dom";

function Login() {
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
          <form action="" className="login-form">
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
              />
            </div>
            <div>
              {/* <label htmlFor="">Password: </label> */}
              <input placeholder="Password" type="password" />
            </div>
            <div>
              <p>
                Don't have an account? I got u. <Link to="/signup">SignUp</Link>
              </p>
            </div>
            <div className="login-btn-container">
              <Link to="/">
                <button id="login-btn">Let's goooo →</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
