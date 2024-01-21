import React from "react";
import "./HomePage.css";
import video from "./ShowPhoto/video.mp4";
//import video from "../../Assets/video.mp4";
import { NavLink } from "react-router-dom";
import SideShow from "./SideShow.js";
const HomePage = () => {
  return (
    <div style={{ marginLeft: "5%", marginRight: "5%" }}>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <nav>
        <NavLink exact to="/" activeClassName="active">
          <button>Home</button>
        </NavLink>
        <NavLink to="/places" activeClassName="active">
          <button>Places</button>
        </NavLink>
        <NavLink to="/map" activeClassName="active">
          <button>Map</button>
        </NavLink>
        <NavLink to="/buy-tour-package" activeClassName="active">
          <button>Buy Tour Package</button>
        </NavLink>
        <NavLink to="/book-now" activeClassName="active">
          <button>Book Now</button>
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          <button>Contact us</button>
        </NavLink>
      </nav>
      <div className="mu">
        <SideShow />
        <div className="text">
          <p>
            Search your destination and enjoy with us ! We Can Assist You As
            Mekelle Tour Agency System!
          </p>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
