import React from 'react';
import '../CSS/ContactUs.css'; // External CSS file

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="container">

        {/* Page Header */}
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Reach out to us for any inquiries, collaborations, or support.</p>
        </div>

        {/* Contact Form and Info */}
        <div className="contact-content">

          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <h2>Our Office</h2>
            <p><strong>Address:</strong> 1234 Dhaka Street, Dhaka 1205, Bangladesh</p>
            <p><strong>Email:</strong> info@fundraiserbd.org</p>
            <p><strong>Phone:</strong> +880 1234 567 890</p>

            <div className="social-links">
              <h3>Follow Us</h3>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

        </div>

        {/* Google Map Section */}
        <div className="map-section">
          <h2>Find Us Here</h2>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902598147861!2d90.39132741498142!3d23.750837794593233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf557b1c6983%3A0x32b2d7f05d3d47d0!2sDhaka!5e0!3m2!1sen!2sbd!4v1683197898104!5m2!1sen!2sbd" 
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fundraiser Office Location">
            </iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
