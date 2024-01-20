import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      console.log(response.data);

      // Clear the input fields after successful login
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Login failed', error);
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
          <button type="submit" className='btn btn-success'>Login</button>
        </form>

        <div className="mt-3">
          <p>Don't have an account? <a href="/register">Create Account</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;


