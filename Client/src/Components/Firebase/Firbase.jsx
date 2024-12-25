// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyC-ggtqw_ncYb3GyX1eLCHUu32jAPftu64",
  authDomain: "imageisle-a0238.firebaseapp.com",
  projectId: "imageisle-a0238",
  storageBucket: "imageisle-a0238.firebasestorage.app",
  messagingSenderId: "681369645096",
  appId: "1:681369645096:web:952d1950da154cebe9051d",
  measurementId: "G-7CMHVH4V43",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function Googleauth(props) {
  const nav = useNavigate();
  const { mode } = props;
  const sigin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        const user = res.user;
        if (mode == "sign") {
          console.log("sign");
          axios
            .post("http://localhost:4050/register", {
              email: user.email,
              password: user.displayName,
              username: user.displayName,
            })
            .then((res) => {
              console.log(res.data);
              localStorage.setItem("email", user.email);

              nav("/");
            });
        } else if (mode == "login") {
          console.log("login");
          axios
            .post("http://localhost:4050/login", {
              email: user.email,
              password: user.displayName,
            })
            .then((res) => {
              console.log(res.data);
              localStorage.setItem("email", user.email);

              nav("/");
            });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <button onClick={sigin}>google</button>
    </div>
  );
}
export default Googleauth;
