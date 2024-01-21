import React from "react";
import "./contact.css"; // Make sure to replace with your actual CSS file
import url1 from "./gmail.jpg"; // Replace with the actual path to your image1
import url2 from "./phone.png"; // Replace with the actual path to your image2
import { Link } from "react-router-dom";

const Contact = () => {
  const phoneNumber = "+251900000001"; // Replace with your actual phone number
  const emailAddress = "MekTour@gmail.com";
  return (
    <div>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
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
      <div className="contact-container">
        <h1 className="contact">
          <br></br>
          If you want to contact Mekelle Tour Agency system you can use the
          following.
        </h1>
        <h1>
          <img src={url1} alt="Phone Icon" className="icon" />
          Phone: <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        </h1>
        <h1>
          <img src={url2} alt="Email Icon" className="icon" />
          Email: <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
        </h1>
      </div>
    </div>
  );
};

export default Contact;
