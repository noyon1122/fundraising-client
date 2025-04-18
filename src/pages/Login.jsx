import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import '../CSS/Login.css'; // External CSS for login

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post('/users/login', credentials);
      alert(`Welcome, ${res.data.name}!`);
    } catch (err) {
      console.error('Login error:', err);
      alert('Login failed!');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input 
          type="email" 
          name="email" 
          placeholder="Email Address" 
          value={credentials.email}
          onChange={handleChange} 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={credentials.password}
          onChange={handleChange} 
          required 
        />
        <button type="submit" className="form-button">Login</button>
      </form>

      <div className="form-footer">
        <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;
