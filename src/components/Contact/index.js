import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';

import './index.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false); // New state for submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true); // Set submitted to true after form submission
  };

  return (
    <>
      <Header />
      <div className="form-container">
        {submitted ? (
          <p className='submit-message'>We'll contact to you soon!</p> // Display this after form submission
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className='contact'>Contact Form</h2>
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
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Contact;
