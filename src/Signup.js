import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import "./Signup.css";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the signup API endpoint
      const response = await axios.post('http://localhost:3001/register', { name, email, password });
      console.log(response.data); // Log the response

      // Redirect to login page upon successful signup
      // Replace the following line with your redirect logic
      // history.push('/login');
      navigate('/login');
    } catch (err) {
      // Handle errors from the API
      console.error('Signup failed:', err.response.data.error);
      // setError(err.response.data.error);
    }
  };

  return (
    <div className='main'>
      <div className="form">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
