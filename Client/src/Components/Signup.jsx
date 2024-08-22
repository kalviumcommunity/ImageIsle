// import React from 'react'
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <div>
        <form action="">
          <div className="login-text">
            <p>
              <span id="login-text-login">login</span> to continue,
            </p>
          </div>
          <div>
            {/* <label htmlFor="">Email: </label> */}
            <input
              placeholder="E-mail"
              type="email"
            />
          </div>
          <div>
            {/* <label htmlFor="">Password: </label> */}
            <input placeholder="Password" type="password" />
          </div>
          <div>
            <Link to="/">
              <button>Let's goooo →</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
