import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Packages from "./Packages";
import "./Packages.css"
const BuyTourPackage=()=>{
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
      return(
        <div className="package-page"> 
          <h1>Available Tour Packages</h1>
        <div className="pacage-container">
           {packages.map((each_tour, index) => (
          <Packages key={index} {...each_tour}>
          </Packages>
        ))}
        </div>
        </div>
      )
}
export default BuyTourPackage;