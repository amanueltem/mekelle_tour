import React from "react";
import "./HomePage.css";
import video from "./ShowPhoto/video.mp4";
//import video from "../../Assets/video.mp4";
import { Link } from "react-router-dom";
import SideShow from "./SideShow.js";
const HomePage = () => {
  return (
    <div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <nav>
        <Link to="/places">
          <button>Places</button>
        </Link>
        <Link to="/map">
          <button>map</button>
        </Link>
        <Link to="/buy-tour-package">
          <button>Buy Tour Package</button>
        </Link>
        <Link to="/book-now">
          <button>Book Now</button>
        </Link>
        <Link to="/Contact">
          <button>Contact us</button>
        </Link>
      </nav>
      <SideShow />
    </div>
  );
};
export default HomePage;
