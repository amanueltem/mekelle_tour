import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
 const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
    

      const response = await axios.post('http://localhost:8800/login', { email, password });
      console.log(response.data);
      if(response.data=="sucess"){
      console.log("sucess*******sucess******sucess")
      navigate("/home")
}
    } catch (error) {
      console.error('Login failed', error);
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='p-3 bg-white w-25'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className='form-control'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className='form-control'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className='btn btn-success' disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {error && (
          <div className="alert alert-danger mt-3" role="alert">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
