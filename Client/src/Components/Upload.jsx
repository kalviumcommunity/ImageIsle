import { useState, useEffect } from "react";
import axios from "axios";

export default function Upload() {
  const [data, setData] = useState([]); // Initialize state as an array if expecting multiple items
  const emails = localStorage.getItem("email");
  console.log(emails);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:4050/upload');
        if (res.data.message === "successful") {
          setData(res.data.data); // Ensure data.data is an array of images
        } else {
          alert("error");
        }
      } catch (er) {
        console.log(er);
      }
    };

    fetchData();
  }, []);
  console.log(data)
  return (
    <div>
      {data.length > 0 ? (
        data.map((item, index) => (
          <img 
            key={index} 
            src={item.link} 
            alt={`Image ${index}`} 
            style={{ width: "200px", height: "200px", margin: "10px" }}
          />
        ))
      ) : (
        <p>No images to display</p>
      )}
    </div>
  );
}
