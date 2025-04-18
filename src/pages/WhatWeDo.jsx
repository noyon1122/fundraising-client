import React from 'react';
import '../CSS/WhatWeDo.css'; // Import external CSS

import educationImage from '../assets/educationImage.jpg'; 
import healthImage from '../assets/healthImage.jpg';
import communityImage from '../assets/comunityImage.jpg';

const WhatWeDo = () => {
  return (
    <section className="what-we-do">
      <div className="container">

        {/* Intro */}
        <div className="intro">
          <h1>What We Do</h1>
          <p>We work across critical areas to create lasting positive change in the lives of people and communities.</p>
        </div>

        {/* Education Section */}
        <div className="work-section">
          <div className="work-image">
            <img src={educationImage} alt="Education Programs" />
          </div>
          <div className="work-content">
            <h2>Education Programs</h2>
            <p>We provide access to quality education, scholarships, and learning resources to children and youth in underserved communities.</p>
          </div>
        </div>

        {/* Health Initiatives Section */}
        <div className="work-section reverse">
          <div className="work-image">
            <img src={healthImage} alt="Health Initiatives" />
          </div>
          <div className="work-content">
            <h2>Health Initiatives</h2>
            <p>Our health initiatives ensure vulnerable communities have access to essential medical care, nutrition, and mental health support.</p>
          </div>
        </div>

        {/* Community Development Section */}
        <div className="work-section">
          <div className="work-image">
            <img src={communityImage} alt="Community Development" />
          </div>
          <div className="work-content">
            <h2>Community Development</h2>
            <p>We empower communities by building sustainable livelihoods, promoting equality, resilience, and leadership.</p>
          </div>
        </div>

        {/* Where We Work */}
        <div className="where-we-work">
          <h2>Where We Work</h2>
          <p>We are proud to serve communities across Asia, Africa, and South America, focusing on rural and marginalized areas.</p>
          <ul className="work-locations">
            <li>India</li>
            <li>Bangladesh</li>
            <li>Kenya</li>
            <li>Brazil</li>
            <li>Uganda</li>
          </ul>
        </div>

        {/* How We Make an Impact */}
        <div className="impact-stats">
          <h2>Our Impact in Numbers</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>100K+</h3>
              <p>Children Educated</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Healthcare Camps</p>
            </div>
            <div className="stat-item">
              <h3>300+</h3>
              <p>Communities Empowered</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Partnerships Built</p>
            </div>
          </div>
        </div>

        {/* Get Involved Section */}
        <div className="get-involved">
          <h2>Want to Make a Difference?</h2>
          <p>Join hands with us to create a better future. Volunteer, Donate, or Partner with us today!</p>
          <a href="/donate" className="cta-button">Get Involved</a>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;
