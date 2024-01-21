import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

const PayforBook = () => {
  const [price, setPrice] = useState(0);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const destination = searchParams.get('destination');
  const transportation = searchParams.get('transportation');
  const email = searchParams.get('email');

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

  console.log(price);

  return (
    <div>
      Payment For Book {price.cost}
    </div>
  );
};

export default PayforBook;

