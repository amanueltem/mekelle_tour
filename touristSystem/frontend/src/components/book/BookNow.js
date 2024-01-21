import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
export default function BookNow() {
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(1);
  // const [destination,setDestination]=useState('');
  const [date, setDate] = useState("");
  const [transportation, setTransportation] = useState("");
  const [duration, setDuration] = useState(0);
  const [number, setNumber] = useState(1);
  const [validationFailed, setValidationFailed] = useState(false); 
   const [fieldsEmpty, setFieldsEmpty] = useState(false);
  const page = "BookNow";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedPlace || !date || !transportation || !duration || !number) {
      setValidationFailed(true);
      alert("pelease enter the field apropretly");
      return;
    }
    setValidationFailed(false);
    console.log("Booking submitted:", {
      selectedPlace,
      date,
      transportation,
      duration,
      number,
      page,
    });
    // Redirect to login page only if validation passed
    window.location.href = `/login?destination=${places[selectedPlace].name}&date=${date}&transportation=${transportation}&duration=${duration}&number=${number}&page=${page}`;
  };

  const handlePlaceChange = (event) => {
    const selectedPlaceIndex = parseInt(event.target.value); // Use event.target.value
    setSelectedPlace(selectedPlaceIndex);
  };

  const SelectPlace = () => (
    <div>
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
  return (
    <div className=" justify-content-center align-items-center  vh-100">
      <form
        className={`p-3 bg-white w-25 ${validationFailed ? 'has-error' : ''}`}
        onSubmit={handleSubmit}
      >
        <table>
          <tr>
            <td>
              <h3>Destination</h3>
            </td>
            <td>
              <SelectPlace />
            </td>
          </tr>
          <tr>
            <td>
              <h3>Date:</h3>
            </td>
            <td>
        <input
  type="date"
  value={date}
  className={`form-control ${validationFailed && date.trim() === '' ? 'is-invalid' : ''}`}
  onChange={(e) => setDate(e.target.value)}
/>
            </td>
          </tr>
          <tr columnSpan="3">
            <td>
              <h3>Transportation:</h3>
            </td>
            <td>
              <h5>
                Bus{" "}
                <input
                  type="radio"
                  name="transport"
                  value="bus"
                  checked={transportation === "bus"}
                  onChange={(e) => setTransportation(e.target.value)}
                />
                Flight{" "}
                <input
                  type="radio"
                  name="transport"
                  value="flight"
                  checked={transportation === "flight"}
                  onChange={(e) => setTransportation(e.target.value)}
                />
              </h5>
            </td>
          </tr>
          <tr>
            <td>
              <h3>Duration:</h3>
            </td>
            <td>
   <input
  type="number"
  placeholder="Enter number of days"
  className={`form-control ${validationFailed && (duration === '' || duration <= 0) ? 'is-invalid' : ''}`}
  onChange={(e) => setDuration(e.target.value)}
/>
            </td>
          </tr>
          <tr>
            <td>
              <h3>Number of people:</h3>
            </td>
            <td>
             <input
  type="number"
  placeholder="Enter number of people"
  className={`form-control ${validationFailed && (number === '' || number <= 0) ? 'is-invalid' : ''}`}
  onChange={(e) => setNumber(e.target.value)}
/>
            </td>
          </tr>
        </table>
        <button type="submit" className="btn btn-success">
          Book Now
        </button>
      </form>
    </div>
  );
}
