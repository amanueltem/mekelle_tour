import React, { useState, useEffect } from "react";
import "./SlideShow.css";
import url1 from "./ShowPhoto/url1.jpg";
import url2 from "./ShowPhoto/url2.jpg";
import url3 from "./ShowPhoto/url3.jpg";

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the index to show the next image
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the duration (in milliseconds) for each slide

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <div className="slideshow">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slide-image"
      />
    </div>
  );
};

// Example usage:
const SideShow = () => {
  const imageUrls = [
    url1,
    url2,
    url3,
    // Add more image URLs as needed
  ];

  return (
    <div>
      <Slideshow images={imageUrls} />
    </div>
  );
};

export default SideShow;
