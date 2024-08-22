import { useState, useEffect } from "react";
import axios from "axios";
import ImageCarousel from "./ImageCarousel";
import "./HomeCss.css";
import Nav from "./Nav";

const API_KEY = import.meta.env.VITE_API_KEY;
function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.unsplash.com/photos/?client_id=${API_KEY}`)
      .then((response) => {
        // console.log(response);
        setImages(response.data);
      });
  }, []);

  return (
    <div>
      <Nav />
      <div className="webDetails">
        <div>
          <span className="logo">imageisle</span>
          <p className="caption caption_one">
            The internet's source for visuals.
          </p>
          <p className="caption">Powered by creators everywhere.</p>
        </div>
        <ImageCarousel images={images} />
      </div>
      {/* <hr /> */}
      <div id="results">
        <h3 id="result_name">Search Results :</h3>
        <div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
