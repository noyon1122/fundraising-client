import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // <-- ✅ import useNavigate
import api from '../services/api';
import '../CSS/Login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // <-- ✅ initialize useNavigate

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post('/users/login', credentials);
      const user = res.data;

      // Save user to localStorage
      localStorage.setItem('user', JSON.stringify(user));

      alert(`Welcome, ${user.name}!`);

      // Redirect based on role
      if (user.role === "ADMIN") {
        navigate('/admin');
      } else {
        navigate('/');
      }

    } catch (error) {
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
