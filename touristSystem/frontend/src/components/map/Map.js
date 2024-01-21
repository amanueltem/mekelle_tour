import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Provide from "./Provide";
import "./style.css";
import { Link } from "react-router-dom";

const Map = () => {
  const [places, setPlaces] = useState([]);
  const [center, setCenter] = useState([12.4148, 39.5582]);
  const [selectedPlace, setSelectedPlace] = useState(0);
  const [selectedType, setSelectedType] = useState(1);
  const [type, setType] = useState([
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  ]);
  useEffect(() => {
    const fetchAllPlaces = async () => {
      try {
        const res = await axios.get("http://localhost:5000/map");
        setPlaces(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    // Fetch places only once when the component mounts
    fetchAllPlaces();
  }, []); // Empty dependency array means this effect runs once on mount

  useEffect(() => {
    // Add the non-scrollable style when the component mounts
    document.body.style.overflow = "hidden";

    // Clean up the style when the component unmounts
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const handlePlaceChange = (event) => {
    const selectedPlaceIndex = parseInt(event.target.value); // Use event.target.value
    setSelectedPlace(selectedPlaceIndex);
    // Set the center based on the selected place
    setCenter([
      places[selectedPlaceIndex].latitude,
      places[selectedPlaceIndex].longitude,
    ]);
  };

  const handleType = (event) => {
    const selectedValue = parseInt(event.target.value);
    setSelectedType(selectedValue);
    if (selectedValue === 1) {
      setType([
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      ]);
    } else {
      setType([
        "https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=yDEkISZLLKud81ZQCaYT",
        "https://api.maptiler.com/maps/satellite/tiles.json?key=yDEkISZLLKud81ZQCaYT",
      ]);
    }
  };

  const SelectPlace = () => (
    <div className="select-container">
      <select
        className="select-element"
        value={selectedPlace}
        onChange={handlePlaceChange}
      >
        <option value="" disabled>
          Select a place
        </option>
        {places.map((place, index) => (
          <option key={index} value={index}>
            {place.name}
          </option>
        ))}
      </select>
    </div>
  );

  const SelectType = () => (
    <div className="select-type">
      <select value={selectedType} onChange={handleType}>
        <option value="" disabled>
          Select map Type
        </option>
        <option key="1" value={1}>
          Basic map
        </option>
        <option key="2" value={2}>
          Satellite map
        </option>
      </select>
    </div>
  );

  return (
    <div style={{ marginLeft: "5%", marginRight: "5%" }}>
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
      <div className="wrapper-container">
        <table>
          <tr>
            <td>
              <SelectPlace />
            </td>
            <td>
              <SelectType />
            </td>
          </tr>
        </table>
        {center && (
          <Provide
            key={JSON.stringify(center)}
            className="map-container"
            center={center}
            url={type[0]}
            attribution={type[1]}
          />
        )}
      </div>
    </div>
  );
};

export default Map;
