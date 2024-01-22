import 'bootstrap/dist/css/bootstrap.min.css';
import {useLocation,useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from "axios"
const PayforPackage=(e)=>{
 const location = useLocation();
 const navigate=useNavigate();
const searchParams = new URLSearchParams(location.search);
const package_id =searchParams.get('package_id')
const email=searchParams.get('email')
const [tourPackage,setTourPackage]=useState('');
const [number,setNumber]=useState();
const [fieldsEmpty, setFieldsEmpty] = useState(false);
const [cost,setCost]=useState(0);

console.log(package_id)
console.log(email)
 
  const userDetails = {
    package_id,
    email,
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
    <div className="card-container">
    <form>
      <div className="card">
      Email:{email}
      </div>
       <div className="card">
      Package name:{package_id}
      </div>
      <div className="card">
      Destination:{destination}
      </div>
      <div className="card">
      Date:{formattedDate}
      </div>
      <div className="card">
      Transportation:{transportation}
      </div>
      <div className="card">
      IntialPrice:{intialCost}
      </div>
      <div className="card">
      duration:{duration} days
      </div>
      <div className="card">
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
