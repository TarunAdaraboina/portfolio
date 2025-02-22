import React, { useState, useEffect } from 'react';
import ContentLoader from 'react-content-loader';
import Header from '../Header';
import Footer from '../Footer';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import './index.css';

const Loader = () => (
  <ContentLoader 
    speed={2}
    width="100%"
    height="100%"
    viewBox="0 0 400 160"
    backgroundColor="#1a1a1a"
    foregroundColor="#2d2d2d"
  >
    <rect x="10" y="20" rx="5" ry="5" width="380" height="20" />
    <rect x="10" y="50" rx="5" ry="5" width="380" height="20" />
    <rect x="10" y="80" rx="5" ry="5" width="380" height="20" />
  </ContentLoader>
);

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      <Header />
      {loading ? (
        <div className="home-container">
          <Loader />
        </div>
      ) : (
        <main className="home-container">
          <div className="home-content">
            <h1 className="title animated-gradient">Hello, I'm Tarun Adaraboina</h1>
            <p className='description'>Mern Stack Developer | Frontend Developer</p>
            <p className="bio">
              Passionate about creating modern, user-friendly web applications that solve real-world problems. 
              Bringing ideas to life through clean code and innovative solutions. 
              Let's build something amazing together!
            </p>

            <div className="social-icons-container">
              <h3 className="connect">Connect with me:</h3>
              <div className="social-links-wrapper">
                <a
                  href="https://www.linkedin.com/in/tarunadaraboina/"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={28} />
                </a>
                <a
                  href="https://github.com/TarunAdaraboina"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <FaGithub size={28} />
                </a>
                <a
                  href="https://www.instagram.com/___tarun_a/"
                  className="social-link"
                  aria-label="Instagram"
                >
                  <FaInstagram size={28} />
                </a>
              </div>
            </div>
          </div>

          <div className="profile-image-container">
            <img
              className="profile-image"
              src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733406609/blankandwhite_-_Copy_wpeb6c.jpg"
              alt="Developer profile"
            />
          </div>
        </main>
      )}
      <Footer />
    </>
  );
};

export default Home;