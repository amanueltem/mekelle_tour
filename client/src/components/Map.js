import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Provide from "./Provide";
import './style.css';

const  Map = () => {
  const [places, setPlaces] = useState([]);
  const [center, setCenter] = useState([13.497402, 39.470737]);
   const [selectedPlace, setSelectedPlace] = useState(0);
const[type,setType]=useState(["https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'])
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
    document.body.style.overflow = 'hidden';

    // Clean up the style when the component unmounts
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []); 

  const handlePlaceChange = (event) => {
    const selectedPlaceId = event.target.value; // Use event.target.value
    setSelectedPlace(selectedPlaceId);
    
    // Find the selected place based on place_id
    const selectedPlaceObj = places.find((place) => place.place_id === parseInt(selectedPlaceId, 10));

    // Set the center based on the selected place
    setCenter([selectedPlaceObj.latitude, selectedPlaceObj.longitude]);
  };

const handleType = (event) => {
  const selectedValue = event.target.value;

  switch (selectedValue) {
    case "basic":
      setType([
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      ]);
      console.log("***************map");
      break;

    case "satellite":
      setType([
        "https://api.maptiler.com/maps/satellite/256/{z}/{x}/{y}.jpg?key=yDEkISZLLKud81ZQCaYT",
        "https://api.maptiler.com/maps/satellite/256/tiles.json?key=yDEkISZLLKud81ZQCaYT"
      ]);
      console.log("************sattelite")
      break;

    default:
      // Handle default case if needed
  }
};


  const SelectPlace = () => (
    <div className="select-container">
      <select className="select-element" value={selectedPlace} onChange={handlePlaceChange}>
       <option value="" disabled>Select a place</option>
        {places.map((place, index) => (
          <option key={index} value={place.place_id}>
            {place.name}
          </option>
        ))}
      </select>
    </div>
  );

 const SelectType = () => (
  <div className="select-type">
    <select onChange={handleType}>
      <option value="" disabled>Select map Type</option>
      <option key="basic" value="basic">Basic map</option>
      <option key="satellite" value="satellite">Satellite map</option>
    </select>
  </div>
);


  return (
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
        <Provide key={JSON.stringify(center)} className="map-container" center={center}  url={type[0]}
            attribution={type[1]}/>
      )}
    </div>
  );
};

export default Map;

