import React from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/Navbar.css' // Import the CSS file

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Fundraiser</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/who_we_are">Who We Are</Link>
        <Link to="/what_we_do">What We Do</Link>
        <Link to="/partners">Our Partners</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/login">Register/Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
