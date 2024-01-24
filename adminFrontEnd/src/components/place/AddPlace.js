import axios from "axios"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function AddPackage() {
const [name,setName]=useState('');
const [latitude,setLatitude]=useState('')
const [longitude,setLongitude]=useState('')


   const handleSubmit = async (e) => {
    e.preventDefault();


    try {

      // Additional user details
      const userDetails = {
       name,
       latitude,
       longitude,
      };
      const response = await axios.post('http://localhost:8800/add_place', userDetails);
      if(response.data=="added"){
      setName('');
      setLatitude('')
      setLongitude('')
      window.alert("the  place had sucessfully added sucessfully added");
      }
      else{
      window.alert("the place is not sucessflly added");
      }
    } catch (error) {
    window.alert("hello");
      console.log('Registration failed', error.response.data);
    }
  };

  return (
    <div className=' justify-content-center align-items-center  vh-100'>
      <form className='p-3 bg-white w-25' onSubmit={handleSubmit}>
        <table>
        <tr>
        <td><h3>Place Name: </h3></td>
        <td>
        <td><input type="text" value={name} onChange={e => setName(e.target.value)} /></td>
        </td>
       </tr>
        <tr>
        <td><h3>Latitude: </h3></td>
        <td>
        <td><input type="number" value={latitude} onChange={e => setLatitude(e.target.value)} /></td>
        </td>
       </tr>
        <tr>
        <td><h3>Longitude: </h3></td>
        <td>
        <td><input type="number" value={longitude} onChange={e => setLongitude(e.target.value)} /></td>
        </td>
       </tr>
        </table>
  <button type="submit" className='btn btn-success'>Add Place</button>


      </form>
    </div>
  )
}
