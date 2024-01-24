import axios from "axios"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function InsertPrice() {

  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(0);
  
  const [transportation, setTransportation] = useState('')
  const [cost,setCost]=useState('')


  useEffect(() => {
    const fetchAllPlaces = async () => {
      try {
        const res = await axios.get("http://localhost:8800/map");
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


    try {

      const currentDate = new Date().toISOString();

      // Additional user details
      const destination=places[selectedPlace].name;
      const userDetails = {
        destination,
         transportation,
         cost
      };
      const response = await axios.post('http://localhost:8800/insert_price', userDetails);
      if(response.data=="added"){
    
      setTransportation('')
      setCost('')
      window.alert("you have sucessfully inserted price");
      }
      else{
      window.alert("the price is already inserted.")
      console.log(response.data);
      }
    } catch (error) {
    window.alert("hello");
      console.log('Insertion failed.', error.response.data);
    }
  };

  const handlePlaceChange = (event) => {
    const selectedPlaceIndex = parseInt(event.target.value); // Use event.target.value
    setSelectedPlace(selectedPlaceIndex);
  };
  const SelectPlace = () => (
    <div>
      <select className="select-element" value={selectedPlace} onChange={handlePlaceChange}>
        <option value="" disabled>Select a place</option>
        {places.map((place, index) => (
          <option key={index} value={index}>
            {place.name}
          </option>
        ))}
      </select>
    </div>
  );
  return (
    <div className=' justify-content-center align-items-center  vh-100'>
      <form className='p-3 bg-white w-25' onSubmit={handleSubmit}>
        <table>
          <tr>
            <td><h3>Destination</h3></td>
            <td><SelectPlace /></td>
          </tr>
          <tr columnSpan="3">
            <td>
  <h3>Transportation:</h3>
</td>
<td>
  <h5>
    Bus <input
      type="radio"
      name="transport"
      value="bus"
      checked={transportation === 'bus'}
      onChange={(e) => setTransportation(e.target.value)}
    />
    Flight <input
      type="radio"
      name="transport"
      value="flight"
      checked={transportation === 'flight'}
      onChange={(e) => setTransportation(e.target.value)}
    />
  </h5>
</td>
          </tr>
          <tr>
            <td>
              <h3>Individual cost:</h3>
            </td>
            <td>
              <input type="number" placeholder="Enter price"  value={cost} onChange={e=>setCost(e.target.value)}/>
            </td>
          </tr>
        </table>
  <button type="submit" className='btn btn-success'>Insert Price</button>
      </form>
    </div>
  )
}
