import axios from "axios"
import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function BookNow(){

 const [places, setPlaces] = useState([]);
 const [selectedPlace, setSelectedPlace] = useState(0);
// const [destination,setDestination]=useState('');
 const[date,setDate]=useState('')
 const[transportation,setTransPortation]=useState('')
 const[duration,setDuration]=useState(0);
 
   
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
    const destination=places[selectedPlace].name;
    const bookDetails = {
       destination,
       date,
       transportation,
       duration,
      };
      console.log(bookDetails)
    }

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
    return(
        <div className=' justify-content-center align-items-center  vh-100'>
            <form className='p-3 bg-white w-25' onSubmit={handleSubmit}>
                <table>
                <tr>
                <td><h3>Destination</h3></td>
                <td><SelectPlace/></td>
                </tr>
                <tr>
                <td><h3>Date:</h3></td>
                <td><input type="date" value={date} onChange={e=>setDate(e.target.value)}/></td>
                </tr>
                <tr columnSpan="3">
                <td><h3>Transportation:</h3></td>
                <td >
                <h5>Bus <input type="radio" name="transport" value="b"  />   
                Flight <input type="radio" name="transport" value="f" /></h5>
                </td>
                </tr>
                <tr>
                <td>
                <h3>Duration:</h3>
                </td>
                <td>
                <input type="number"  placeholder="Enter number of days"/>
                </td>
                </tr>
                </table>
                <button type="submit" className='btn btn-success'>Book Now</button>
            </form>
        </div>
    )
}
