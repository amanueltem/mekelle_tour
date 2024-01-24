import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Packages from "./Packages";
import "./Packages.css";
import { NavLink,useLocation } from "react-router-dom";
const BuyTourPackage = () => {
  const [packages, setPackages] = useState([]);
 const location = useLocation();

useEffect(() => {
  const fetchAllPackages = async () => {
    try {
      const res = await axios.get("http://localhost:8800/tour_package");
      setPackages(res.data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  // Fetch packages every time the component mounts or the route changes
  fetchAllPackages();
}, [location]); 
  return (
    <div style={{ marginLeft: "5%", marginRight: "5%" }}>
      <div className="package-page">
        <h1>Available Tour Packages</h1>
        <div className="pacage-container">
          {packages.map((each_tour, index) => (
            <Packages className="card" key={index} {...each_tour}></Packages>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BuyTourPackage;
