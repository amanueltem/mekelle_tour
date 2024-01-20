import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import axios from 'axios';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [fieldsEmpty, setFieldsEmpty] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any of the fields are empty
    if (!email || !password || !confirmPassword) {
      setFieldsEmpty(true);
      setPasswordsMatch(true); // Reset password match status
      return;
    }

    try {
      // Ensure that the password and confirmPassword match
      if (password !== confirmPassword) {
        setPasswordsMatch(false);
        setFieldsEmpty(false); // Reset empty fields status
        return;
      }

      const currentDate = new Date().toISOString();

      // Additional user details
      const userDetails = {
        email,
        password,
        firstAccountCreatedDate: currentDate.slice(0, 19).replace("T", " "),
        lastLoginDate: currentDate.slice(0, 19).replace("T", " "),
      };

      const response = await axios.post('http://localhost:5000/register', userDetails);
      console.log(response.data);

      // Clear the input fields and reset password match status after successful registration
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setPasswordsMatch(true);
      setFieldsEmpty(false);
    } catch (error) {
      console.log('Registration failed', error.response.data);
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='p-3 bg-white w-25'>
        <form onSubmit={handleSubmit}>
          <div className={`mb-3 ${fieldsEmpty && !email ? 'has-error' : ''}`}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className={`form-control ${fieldsEmpty && !email ? 'is-invalid' : ''}`}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            {fieldsEmpty && !email && <div className="invalid-feedback">Please enter your email</div>}
          </div>
          <div className={`mb-3 ${fieldsEmpty && !password ? 'has-error' : ''}`}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className={`form-control ${passwordsMatch ? '' : 'is-invalid'}`}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className={`mb-3 ${fieldsEmpty && !confirmPassword ? 'has-error' : ''}`}>
            <label htmlFor="confirmPassword">Confirm your password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              className={`form-control ${passwordsMatch ? '' : 'is-invalid'}`}
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
            {!passwordsMatch && <div className="invalid-feedback">Passwords do not match</div>}
          </div>
          <button type="submit" className='btn btn-success'>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;


