import React, { useState } from 'react';
import api from '../services/api';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log('Inside  handleChange')
  };

  const handleSubmit = async e => {
    console.log('Inside Handle Button')
    e.preventDefault();
    try {
        console.log(user)
      await api.post('/register', user);
      alert('User registered successfully!');
    } catch (err) {
      alert('Registration failed!');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} /><br />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} /><br />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
