// Import React, useState, useEffect
import React, { useState, useEffect } from 'react';
import './Packages.css';
import { Link } from "react-router-dom"

const Packages = (props) => {
  const [packageImage, setPackageImage] = useState(null);
  const [formattedDate, setFormattedDate] = useState('');
   const dataToPass = {
    // Your data goes here
    package_id:props.package_id,
    package_name: props.package_name,
    package_destination:props.package_destination,
    package_date:props.package_date,
    package_transportation:props.package_transportation
  };
  useEffect(() => {
    // Dynamically import the image
    import(`./package_images/${props.package_image}`)
      .then((image) => setPackageImage(image.default))
      .catch((error) => console.error('Error loading image:', error));

    // Format the date
    const date = new Date(props.package_date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formatted = date.toLocaleDateString(undefined, options);
    setFormattedDate(formatted);
  }, [props.package_image, props.package_date]);

  return (
    <div className='tour-packages'>
      <h3>Package Name: {props.package_id}</h3>
      <h3>Destination: {props.package_destination}</h3>
      <h3>
        {packageImage && <img src={packageImage} alt="tour package" />}
      </h3>
      <h2> {props.package_desc}</h2>
      <h3>Date: {formattedDate}</h3>
      <h3>Transportation: {props.package_transportation}</h3>
      <h3>Initial price: {props.package_price}</h3>
     <Link to="/login"><button className='buy-button'>Buy Package</button></Link>
    </div>
  );
};

export default Packages;

