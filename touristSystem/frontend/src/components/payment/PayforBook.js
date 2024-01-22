import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation,useNavigate,NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Payment.css"
const PayforBook = () => {
  const [price, setPrice] = useState('');

  const location = useLocation();
  const navigate=useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const destination = searchParams.get('destination');
  const transportation = searchParams.get('transportation');
  const email = searchParams.get('email');
  const number=searchParams.get('number');
  const duration=searchParams.get('duration');
  let date=searchParams.get('date');
  date=new Date(date)
  console.log(date)
  const userDetails = {
    destination,
    transportation,
  };


  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await axios.post("http://localhost:5000/price", userDetails);
        setPrice(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    // Fetch price only once when the component mounts
    fetchPrice();
  }, []); // Empty dependency array means this effect runs once on mount

  //console.log(price[0].cost);
  let totalCost=0;
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate=date.toLocaleDateString(undefined, options);
  let intialCost;
  try{
 intialCost=parseFloat(price[0].cost)
totalCost=intialCost+parseInt(duration)/100*intialCost+parseInt(number)/2*intialCost;
  console.log(duration)
  console.log(number)
  }
  catch(err){
  console.log(err)
  }
  
  
  const handleSubmit=(e)=>{
  navigate('/')
  }
  
  return (
  <div>
    <div className="cc-container">
    <form onSubmit={handleSubmit}>
      <div className="cc">
      Email:{email}
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
      duration:{duration} Days
      </div>
      <div className="cc">
      Family members:{number}
      </div>
      <div className="cc">
      TotalCost:{totalCost}
      </div>
      <div>
      <button type="submit" className="btn btn-success" >make payment</button>
      <button className="btn btn-success cancel" onClick={e=>navigate('/')}>Cancel</button>
      </div>
      </form>
    </div>
    </div>
  );
};

export default PayforBook;

