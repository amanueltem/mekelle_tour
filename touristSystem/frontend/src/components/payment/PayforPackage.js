import 'bootstrap/dist/css/bootstrap.min.css';
import {useLocation,useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import { useAuth } from '../profile/AuthContext';
import axios from "axios"
const PayforPackage=(e)=>{
 const location = useLocation();
 const navigate=useNavigate();
const searchParams = new URLSearchParams(location.search);
const package_id =searchParams.get('package_id')
const {user}=useAuth();
const [tourPackage,setTourPackage]=useState('');
const [number,setNumber]=useState();
const [fieldsEmpty, setFieldsEmpty] = useState(false);
const [cost,setCost]=useState(0);

console.log(package_id)
console.log(user)
 
  const userDetails = {
    package_id,
    user,
  };

useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await axios.post("http://localhost:5000/package",userDetails);
        setTourPackage(res.data);
        console.log("hello")
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    // Fetch price only once when the component mounts
    fetchPrice();
  }, []); // Empty dependency array means this effect runs once on mount
  
  
  
  
  
  const handleSubmit=(e)=>{
    e.preventDefault();

    // Check if any of the fields are empty
    if (!number) {
      setFieldsEmpty(true);
      alert("please enter number of family members")
      return;
    }
    
    const temp=intialCost+intialCost*(parseInt(number)/9)
    setCost(temp);
    console.log("&&&&&&&&&&&&&&&&&&&"+cost);
    
  }
  
  
  
  
  let destination,package_name,transportation,intialCost,duration,options,date,formattedDate;
try{
console.log(tourPackage[0]);

destination=tourPackage[0].package_destination;
package_name=tourPackage[0].package_id;
transportation=tourPackage[0].package_transportation;
intialCost=tourPackage[0].package_price;
duration=tourPackage[0].duration;
options = { year: "numeric", month: "long", day: "numeric" };
date=new Date(tourPackage[0].package_date);
formattedDate=date.toLocaleDateString(undefined, options);
}
catch(err){
console.log(err);
}
return(
<div>
    <div className="cc-container">
    <form>
      <div className="cc">
      Email:{user}
      </div>
       <div className="cc">
      Package name:{package_id}
      </div>
      <div className="cc">
      Destination:{destination}
      </div>
      <div className="cc">
      Date:{formattedDate}
      </div>
      <div className="cc">
      Transportation:{transportation}
      </div>
      <div className="cc">
      IntialPrice:{intialCost}
      </div>
      <div className="cc">
      duration:{duration} days
      </div>
      <div className="cc">
      Family members:
      <input type="text"   value={number}
              onChange={(e) =>
               {
               setNumber(e.target.value)
               /*const temp=intialCost+intialCost*(parseInt(number)/9)
              setCost(temp);*/
               }
               } placeHolder="insert number of family members" className={`mb-3 ${fieldsEmpty && !number ? 'has-error' : ''}`}/>
      </div>
      <div className="card">
      Total cost:{cost}
      </div>
      <div>
      <button onClick={handleSubmit} className="btn btn-success" >Book Now</button>
      <button className="btn btn-success cancel" onClick={e=>navigate('/')}>Cancel</button>
      </div>
      </form>
    </div>
    </div>
)
}
export default PayforPackage;
