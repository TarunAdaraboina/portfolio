import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { FaPhoneAlt } from "react-icons/fa";

import './index.css';

function Contact() {
  return (
    <>
      <Header />
      <div className="contact-container">
        <h1 className='contact-title'> Let's collaborate to bring your next project to life!</h1>
        <div className='contact-cont'>
        <p className='direct-contact'>Contact Me directly: <FaPhoneAlt /> <a href="tel:+9059124937">9059124937</a></p>
        <p className='contact-email'>Email Me at: <a href="mailto:adaraboinatarun@gmail.com">adaraboinatarun@gmail.com</a></p>
        <p className="contact-location">
          Visit us at: <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer"> Sanjay Nagar, Kothagudem, Telangana, India 507101</a>
        </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
