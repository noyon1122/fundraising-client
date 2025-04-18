import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import '../CSS/Register.css'; // External CSS for register

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post('/register', user);
      alert('User registered successfully!');
    } catch (err) {
      alert('Registration failed!');
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Full Name" 
          value={user.name}
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email Address" 
          value={user.email}
          onChange={handleChange} 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={user.password}
          onChange={handleChange} 
          required 
        />
        <button type="submit" className="form-button">Register</button>
      </form>

      <div className="form-footer">
        <p>Already registered? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
