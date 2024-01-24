import "bootstrap/dist/css/bootstrap.min.css";
import "./SlideShow.css"
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import React, { useState,useEffect } from "react";
import axios from "axios";
import { useAuth } from './profile/AuthContext';
const Login = () => {
  /**************Data from the other page"*/

  console.log("****************************************/");
  const location = useLocation();
   //const { login } = useAuth();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const destination = searchParams.get("destination");
  const date = searchParams.get("date");
  const transportation = searchParams.get("transportation");
  const duration = searchParams.get("duration");
  const number = searchParams.get("number");
  const page = searchParams.get("page");
  const package_id=searchParams.get("package_id")
  /*console.log(destination);
  console.log(date);
  console.log(transportation);
  console.log(duration);
  console.log(number);*/
  console.log(package_id)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [fieldsEmpty, setFieldsEmpty] = useState(false);
  const [sucess,setSucess]=useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
     if ( !email || !password) {
      alert("Please fill in all required fields.");
      setFieldsEmpty(true);
      return;
    }
    try {
      setLoading(true);

      const response = await axios.post("http://localhost:8800/loginu", {
        email,
        password,
      });
      console.log(response.data);
      if(response.data=="sucess"){
        window.localStorage.setItem("email",email);
        login(email);
      setSucess(true)
       if (page === "BookNow") {
  // Navigate to '/payforbook' with additional parameters
  navigate(`/payforbook?destination=${destination}&date=${date}&transportation=${transportation}&duration=${duration}&number=${number}`);
} else {
  // Navigate to '/payforpackage' with additional parameters
  navigate(`/payforpackage?package_id=${package_id}`);
  }
}
else{
alert("invalid user name or password")
setPassword('');
}
    } catch (error) {
    console.log(error);
      console.error("Login failed", error);
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };
  
  
   const { user, login, logout } = useAuth();
    const handleLogout = () => {
    logout();
    // Redirect to the login page or any other desired page
    navigate('/login');
  };
   useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="p-3 bg-white w-30">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}  
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {error && (
          <div className="alert alert-danger mt-3" role="alert">
            {error}
          </div>
        )}

        <div className="mt-3">
          <p>
            Don't have an account? <a href="/register">Create Account</a>
          </p>
        </div>
        <div>
        <button className="btn back" onClick={e=>navigate('/')}>Back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
