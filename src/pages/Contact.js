import React from 'react';
import '../index.css';

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><span className="contact-label">Email:</span> info@cineflix.com</p>
          <p><span className="contact-label">Phone:</span> (555) 123-4567</p>
          <p><span className="contact-label">Address:</span> 123 Cinema Street, Movie Town, MT 12345</p>
          
          <h3>Business Hours</h3>
          <p>Monday - Friday: 9AM - 6PM</p>
          <p>Saturday: 10AM - 4PM</p>
          <p>Sunday: Closed</p>
        </div>
        
        <div className="contact-form-container">
          <h3>Send us a Message</h3>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="What's this about?" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell us what you think!"></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
      
      <div className="social-links">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="#" className="social-icon">Twitter</a>
          <a href="#" className="social-icon">Instagram</a>
          <a href="#" className="social-icon">Facebook</a>
          <a href="#" className="social-icon">YouTube</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
