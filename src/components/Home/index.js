import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import {FaLinkedin,FaGithub,FaInstagram} from 'react-icons/fa'

import './index.css'

function Home() {
  return (
    <>
    <Header/>
    <div className='home-container'>
    <div className='container'>
      <h1 className='title'>Hi, I'm Tarun</h1>
      <p className="description"> a passionate MERN Stack Developer focused on building responsive and dynamic web applications. With expertise in React, Node.js, and MongoDB, 
        I create user-centric solutions that solve real-world problems. Let's collaborate to bring your next project to life!
        </p>
        <p className='mail'>
           <a href="mailto:adaraboinatarun@gmail.com">adaraboinatarun@gmail.com</a>
        </p>

      <div className="social-icons-container">
      <a href="https://www.linkedin.com/in/tarunadaraboina/" target="_blank" rel="noopener noreferrer" className='social-links'>
        <FaLinkedin size={30}  />
      </a>
      <a href="https://github.com/TarunAdaraboina" target="_blank" rel="noopener noreferrer" className='social-links'>
        <FaGithub size={30}  />
      </a>
      <a href="https://www.instagram.com/___tarun_a/" target="_blank" rel="noopener noreferrer" className='social-links'>
        <FaInstagram size={30} />
      </a>
    </div>
      </div>
      <img  className='profile-image'
     src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733406609/blankandwhite_-_Copy_wpeb6c.jpg" 
       alt="profile"/>
    </div>
    <Footer/>
    </>
  );
}

export default Home;
