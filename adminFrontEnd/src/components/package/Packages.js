import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Packages.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Packages = (props) => {
  const [formattedDate, setFormattedDate] = useState("");
  const navigate = useNavigate();
  const page = "Package";

  useEffect(() => {
    // Format the date
    const date = new Date(props.package_date);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formatted = date.toLocaleDateString(undefined, options);
    setFormattedDate(formatted);
  }, [props.package_date]);

  const handleClick = (e) => {
    // Handle click logic
  };

  return (
    <div className="card">
      <b>Package Name: {props.package_id}</b>
      <b>Destination: {props.package_destination}</b>
      {/* Directly set the src attribute with the image URL */}
<img src={`http://localhost:8800/images/${props.package_image}`} alt="tour package" />


      <b> {props.package_desc}</b>
      <b>Date: {formattedDate}</b>
      <b>Transportation: {props.package_transportation}</b>
      <b>Initial price: {props.package_price}</b>
      <button className="btn btn-success" onClick={handleClick}>
        Delete Package
      </button>
    </div>
  );
};

export default Packages;

