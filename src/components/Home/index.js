import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import './index.css';

const Home = () => {
  return (
    <>
      <Header />
      <main className="home-container">
        <div className="home-content">
          <h1 className="title">Hi, I'm Tarun Adaraboina</h1>
          <p className="description">
            Full-Stack Developer | Building Scalable Web Applications
          </p>
          <p className="bio">
            I'm passionate about creating modern, user-friendly web applications that solve real-world problems. 
            With expertise in React, Node.js, and Python, I bring ideas to life through clean code and innovative solutions. 
            Let's build something amazing together!
          </p>
          <div className="social-icons-container">
            <h2 className="connect">Let's Connect:</h2>
            <a
              href="https://www.linkedin.com/in/tarunadaraboina/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-links"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/TarunAdaraboina"
              target="_blank"
              rel="noopener noreferrer"
              className="social-links"
              aria-label="GitHub"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.instagram.com/___tarun_a/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-links"
              aria-label="Instagram"
            >
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
        <img
          className="profile-image"
          src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733406609/blankandwhite_-_Copy_wpeb6c.jpg"
          alt="Tarun profile"
        />
      </main>
      <Footer />
    </>
  );
};

export default Home;
