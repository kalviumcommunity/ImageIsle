import { useState, useEffect } from "react";
import "./HomeCss.css";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="carousel">
      {images &&
        images.map((image, index) => (
          <div
            key={image.id}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={image.urls.regular} alt={image.alt_description} />
          </div>
        ))}
    </div>
  );
};

export default ImageCarousel;
