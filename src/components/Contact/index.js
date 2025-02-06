import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import './index.css';

function Contact() {
  return (
    <>
      <Header />
      <div className="contact-container">
        <h1 className='contact-title'>Let's Connect!</h1>
        <p className="contact-description">
          I'm always open to new opportunities and collaborations. Feel free to reach out to me via email or LinkedIn, or check out my GitHub for more projects.
        </p>

        <div className='contact-details'>
          <p className='direct-contact'><FaPhoneAlt /> Phone : <a href="tel:+919059124937">+91 9059124937</a></p>
          <p className='contact-email'><FaEnvelope /> Email : <a href="mailto:adaraboinatarun@gmail.com">adaraboinatarun@gmail.com</a></p>
          <p className='contact-linkedin'><FaLinkedin /> LinkedIn : <a href="https://www.linkedin.com/in/tarunadaraboina" target="_blank" rel="noopener noreferrer">linkedin.com/in/tarunadaraboina</a></p>
          <p className='contact-github'><FaGithub /> GitHub : <a href="https://github.com/TarunAdaraboina" target="_blank" rel="noopener noreferrer">github.com/TarunAdaraboina</a></p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
