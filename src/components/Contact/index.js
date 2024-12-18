import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { FaPhoneAlt } from "react-icons/fa";

import './index.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false); // State for submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert("All fields are required.");
      return;
    }
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <div className="form-container">
        {submitted ? (
          <p className='submit-message'>Thank you for reaching out! We’ll get back to you within 24 hours.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className='input-container'>
              <label htmlFor="name" className='label'>Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Enter your Name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='input-container'>
              <label htmlFor="phone" className='label'>Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder='Enter your Mobile'
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className='input-container'>
              <label htmlFor="email" className='label'>Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Enter your email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='input-container'>
              <label htmlFor="message" className='label'>Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message here"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
        {/* Adding direct contact phone number */}
        <p className='direct-contact'>Or contact us directly: <FaPhoneAlt /> <a href="tel:+9059124937">9059124937</a></p>
        {/* Location */}
        <p className="contact-location">
          Visit us at: <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">2 Sanjay Nagar, Kothagudem, Telangana, India 507101</a>
        </p>
        {/* Working Hours */}
        <p className="working-hours">Working Hours: Monday - Friday, 9:00 AM - 6:00 PM</p>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
