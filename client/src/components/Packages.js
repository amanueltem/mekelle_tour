import React, { useState, useEffect } from 'react';
import './Packages.css'
const Packages = (props) => {
  const [packageImage, setPackageImage] = useState(null);

  useEffect(() => {
    // Dynamically import the image
    import(`./package_images/${props.package_image}`)
      .then((image) => setPackageImage(image.default))
      .catch((error) => console.error('Error loading image:', error));
  }, [props.package_image]);
  console.log(packageImage)

  return (
    <div className='tour-packages'>
      <h3>Package Name: {props.package_name}</h3>
      <h3>Destination: {props.package_destination}</h3>
      <h3>
        {packageImage && (
          <img src={packageImage} alt="tour package" />
        )}
      </h3>
      <h2> {props.package_desc}</h2>
      <h3>Date: {props.package_date}</h3>
      <h3>Transportation: {props.package_transportation}</h3>
      <h3>Intial price: {props.package_price}</h3>
      <button className='buy-button'>Buy Package</button>
    </div>
  );
};

export default Packages;
