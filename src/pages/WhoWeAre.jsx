import React from 'react';
import '../CSS/WhoWeAre.css';

import impactImage from '../assets/child2.jpg'; // Big image at the top

const WhoWeAre = () => {
  return (
    <section className="who-we-are">
      <div className="container">

        {/* Big Top Image */}
        <div className="top-image">
          <img src={impactImage} alt="Making an Impact" />
        </div>

        {/* Who We Are Section */}
        <div className="intro">
          <h1>Who We Are</h1>
          <p>
            We are a passionate team dedicated to making a real difference in the lives of people in need.
            Through collaboration, innovation, and compassion, we work tirelessly to create positive change
            in communities around the world.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower individuals, families, and communities by providing resources, education,
            and support. Small acts of kindness can create a ripple effect of lasting change.
          </p>
        </div>

        {/* Our Core Values Section */}
        <div className="core-values">
          <h2>Our Core Values</h2>
          <div className="values-list">
            <div className="value-item">
              <h3>Compassion</h3>
              <p>We act with empathy and kindness towards those we serve.</p>
            </div>
            <div className="value-item">
              <h3>Integrity</h3>
              <p>We are honest, transparent, and committed to doing what’s right.</p>
            </div>
            <div className="value-item">
              <h3>Collaboration</h3>
              <p>We work together with partners and communities to achieve greater impact.</p>
            </div>
          </div>
        </div>

        {/* Our Impact Section */}
        <div className="impact-text">
          <h2>Our Impact</h2>
          <p>
            Over the past 10 years, we have reached over 100,000 individuals through our health, education,
            and community-building programs. Every donation you make directly supports real lives and real futures.
          </p>
        </div>

        {/* Meet Our Team Section */}
        <div className="meet-team">
          <h2>Meet Our Team</h2>
          <p>
            Behind every success story is a team of dreamers, doers, and believers. Our team brings expertise, passion,
            and dedication to every project, ensuring maximum impact.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;
