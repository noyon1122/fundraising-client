import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    padding: '15px',
    background: '#f4f4f4',
    borderBottom: '1px solid #ccc',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const linkStyle = {
    marginRight: '15px',
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  };

  return (
    <nav style={navStyle}>
      <div>
        <Link to="/" style={{ ...linkStyle, fontSize: '20px' }}>Fundraiser</Link>
      </div>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/who_we_are" style={linkStyle}>Who We Are</Link>
        <Link to="/what_we_do" style={linkStyle}>What We Do</Link>
        <Link to="/partners" style={linkStyle}>Our Partners</Link>
        <Link to="/contact" style={linkStyle}>Contact Us</Link>
        <Link to="/donate" style={linkStyle}>Donate</Link>
        <Link to="/login" style={linkStyle}>Register/Login</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
