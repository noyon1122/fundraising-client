import React, { useState } from 'react';
import api from '../services/api';


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
      // Optionally store user info in localStorage
    } catch (err) {
      console.error('Login error:', err);
      alert('Login failed!');
    }
    
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} /><br />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
