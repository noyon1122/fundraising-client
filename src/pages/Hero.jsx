import React from 'react';
import '../CSS/Hero.css'; // Import the css file
import heroImage from '../assets/child.jpg';
import Donate from '../components/Donate';

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-content">
        <h1>Change Lives Today with Your Support</h1>
        <p>Your donation empowers communities in need.</p>

        {/* Donate Button */}
        <div style={{ marginTop: '20px' }}>
          <Donate />
        </div>
      </div>
    </section>
  );
};

export default Hero;
