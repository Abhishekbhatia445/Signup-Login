import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Signup.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the login API endpoint
      const response = await axios.post('http://localhost:3001/login', { email, password });
      console.log(response.data); // Log the response

      // Redirect to another page upon successful login
      // For example, redirect to a dashboard page
      navigate('/dashboard');
    } catch (err) {
      // Handle errors from the API
      console.error('Login failed:', err.response.data);
      // You can display an error message to the user
    }
  };

  return (
    <div className="form">
      <h1>Login</h1>
      <div className="form-body">
        <form>
          <div className="email">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          </div>
          <div className="password">
            <label>Password</label><br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          </div>
          <br />
          <div>
            <button type="submit" onClick={(e) => handleSubmit(e)}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
