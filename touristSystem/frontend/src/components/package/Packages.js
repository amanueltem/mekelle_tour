// Import React, useState, useEffect
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Packages.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const Packages = (props) => {
  const [packageImage, setPackageImage] = useState(null);
  const [formattedDate, setFormattedDate] = useState("");
  const navigate=useNavigate();
  const page="Package"
  const email=window.localStorage.getItem("email");
  const dataToPass = {
    // Your data goes here
    package_id: props.package_id,
    package_name: props.package_name,
    package_destination: props.package_destination,
    package_date: props.package_date,
    package_transportation: props.package_transportation,
  };
  useEffect(() => {
    // Dynamically import the image
    import(`./package_images/${props.package_image}`)
      .then((image) => setPackageImage(image.default))
      .catch((error) => console.error("Error loading image:", error));

    // Format the date
    const date = new Date(props.package_date);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formatted = date.toLocaleDateString(undefined, options);
    setFormattedDate(formatted);
  }, [props.package_image, props.package_date]);
//{`/login?package_id=${props.package_id}&page=${page}`}
const handleClick=(e)=>{
if(email!==null){
  navigate(`/payforpackage?package_id=${props.package_id}`);
}
else{
  navigate(`/login?package_id=${props.package_id}&page=${page}`)
}
}
  return (
    <div className="card">
      <b>Package Name: {props.package_id}</b>
      <b>Destination: {props.package_destination}</b>
      <b>{packageImage && <img src={packageImage} alt="tour package" />}</b>
      <b> {props.package_desc}</b>
      <b>Date: {formattedDate}</b>
      <b>Transportation: {props.package_transportation}</b>
      <b>Initial price: {props.package_price}</b>
        <button className="btn btn-success" onClick={handleClick}>Buy Package</button>
    </div>
  );
};

export default Packages;
