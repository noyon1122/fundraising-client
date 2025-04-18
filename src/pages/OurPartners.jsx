import React from 'react';
import '../CSS/OurPartners.css';

// Partner logos
import aciGroup from '../assets/logos/aciGroup.png';
import akijGroup from '../assets/logos/akijGroup.png';
import anwarGroup from '../assets/logos/anwarGroup.png';
import squareGroup from '../assets/logos/squareGroup.png';

const OurPartners = () => {
  return (
    <section className="our-partners">
      <div className="container">

        {/* Intro */}
        <div className="intro">
          <h1>Our Trusted Partners</h1>
          <p>We collaborate with leading organizations to create lasting impact around the world.</p>
        </div>

        {/* Partner Logos Section */}
        <div className="partners-grid">
          <div className="partner-card">
            <img src={aciGroup} alt="ACI Group" />
          </div>
          <div className="partner-card">
            <img src={akijGroup} alt="Akij Group" />
          </div>
          <div className="partner-card">
            <img src={anwarGroup} alt="Anwar Group" />
          </div>
          <div className="partner-card">
            <img src={squareGroup} alt="Square Group" />
          </div>
        </div>

        {/* Partnership Features */}
        <div className="features-section">
          <h2>Why Collaborate With Us?</h2>
          <div className="features-grid">
            <div className="feature-box">
              <h3>Shared Vision</h3>
              <p>We believe in mutual growth and social responsibility.</p>
            </div>
            <div className="feature-box">
              <h3>Broader Reach</h3>
              <p>Expand your impact across communities and causes.</p>
            </div>
            <div className="feature-box">
              <h3>Brand Empowerment</h3>
              <p>Gain goodwill and recognition through meaningful partnership.</p>
            </div>
            <div className="feature-box">
              <h3>Employee Engagement</h3>
              <p>Offer volunteer programs that inspire your workforce.</p>
            </div>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="join-us">
          <h2>Become a Partner</h2>
          <p>Join our journey towards creating a sustainable and compassionate world. Let's make an impact together!</p>
          <a href="/contact" className="cta-button">Become a Partner</a>
        </div>

      </div>
    </section>
  );
};

export default OurPartners;
