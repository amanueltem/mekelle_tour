import axios from "axios"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function AddPackage() {

  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(0);
  // const [destination,setDestination]=useState('');
  const [date, setDate] = useState('')
  const [transportation, setTransportation] = useState('')
  const [duration, setDuration] = useState(0);
  const [price,setPrice]=useState(1)
  const [name,setName]=useState('');
  const [description,setDescription]=useState('')
  const [image,setImage]=useState('')


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
       name,
        destination,
        image,
         date,
         transportation,
         duration,
        price,
        description,
      };
      const response = await axios.post('http://localhost:8800/add_package', userDetails);
      if(response.data=="added"){
      setName('');
      setImage('');
      setTransportation('')
      setDuration('')
      setPrice('')
      setDescription('')
      setTransportation('')
      setDate('')
      window.alert("the tour package is sucessfully added");
      }
      else{
      window.alert("the tour package is not sucessflly added");
      }
    } catch (error) {
    window.alert("hello");
      console.log('Registration failed', error.response.data);
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
        <td><h3>Package Name: </h3></td>
        <td>
        <td><input type="text" value={name} onChange={e => setName(e.target.value)} /></td>
        </td>
        </tr>
          <tr>
            <td><h3>Destination</h3></td>
            <td><SelectPlace /></td>
          </tr>
          <tr>
            <td><h3>Image:</h3></td>
            <td><input type="file" value={image} onChange={e => setImage(e.target.value)} /></td>
          </tr>
          
          <tr>
            <td><h3>Date:</h3></td>
            <td><input type="date" value={date} onChange={e => setDate(e.target.value)} /></td>
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
              <h3>Duration:</h3>
            </td>
            <td>
              <input type="number" placeholder="Enter number of days"  onChange={e=>setDuration(e.target.value)}/>
            </td>
          </tr>
          <tr>
            <td><h3>Price for each:</h3></td>
            <td><input type="number" placeholder="Enter price for each one"  onChange={e=>setPrice(e.target.value)}/></td>
          </tr>
          <tr>
            <td><h3>Description:</h3></td>
            <td>
            <textArea rows="3" cols="40" placeholder="Description for tour package"     
             value={description} 
              onChange={(e)=>{setDescription(e.target.value); console.log(description)}} >
              </textArea>
              </td>
          </tr>
        </table>
  <button type="submit" className='btn btn-success'>Add Tour Package</button>


      </form>
    </div>
  )
}
