import React from 'react';

// Replace with the path to your image
import heroImage from '../assets/child.jpg';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <h1>Change Lives Today with Your Support</h1>
        <p>Your donation empowers communities in need.</p>
        <a href="/donate" className="cta-button">
          Donate Now
        </a>
      </div>
    </section>
  );
};

export default Hero;