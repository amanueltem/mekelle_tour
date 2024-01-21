import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Packages from "./Packages";
import "./Packages.css";
import { NavLink } from "react-router-dom";

const BuyTourPackage = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    const fetchAllPackages = async () => {
      try {
        const res = await axios.get("http://localhost:5000/tour_package");
        setPackages(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    // Fetch packages only once when the component mounts
    fetchAllPackages();
  }, []); // Empty dependency array means this effect runs once on mount
  return (
    <div style={{ marginLeft: "5%", marginRight: "5%" }}>
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
      <div className="package-page">
        <h1>Available Tour Packages</h1>
        <div className="pacage-container">
          {packages.map((each_tour, index) => (
            <Packages key={index} {...each_tour}></Packages>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BuyTourPackage;
