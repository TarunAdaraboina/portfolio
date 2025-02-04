import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { FaFigma } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

import Header from '../Header';
import Footer from '../Footer';

import './index.css';

function About() {
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="about-me-section">
          <div className='description-container'>
          <h1 className="description-1">
            I'm Tarun Adaraboina, a passionate Frontend Developer based in Hyderabad, Telangana.
          </h1>
          <p className="description-2">"As a frontend developer, I specialize in creating dynamic web applications using HTML, CSS, and JavaScript. 
              I build intuitive user interfaces with React, ensuring smooth and responsive designs. 
              My expertise extends to backend development, where I utilize Node.js and MongoDB to create robust, scalable applications. 
              With a keen focus on both frontend and backend, I work to deliver seamless experiences. 
              My design approach is complemented by the use of CSS for styling, ensuring a polished, user-friendly interface. 
              I'm always eager to expand my skills and explore the latest web technologies to improve user interaction and experience."
            </p>
            </div>
            <div>
          <img src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733492343/DALL_E_2024-12-06_19.07.29_-_A_digital_artwork_showcasing_a_frontend_developer_working_on_a_complex_web_design._The_scene_features_a_clean_and_organized_workspace_with_dual_monito_casxno.webp"
               className='about-image'
               alt='about-image'
                />
                </div>
        </div>
        {/* Skills Section */}
        <div className="skills-section">
        <ul className="skills-list">Skills : 
       <li className="skill-item">
      <FaHtml5 className="skill-icon html-icon" />
      <p className="skill-title">HTML</p>
    </li>
    <li className="skill-item">
      <FaCss3Alt className="skill-icon css-icon" />
      <p className="skill-title">CSS</p>
    </li>
    <li className="skill-item">
      <IoLogoJavascript className="skill-icon javascript-icon" />
      <p className="skill-title">JavaScript</p>
    </li>
    <li className="skill-item">
      <GrReactjs className="skill-icon react-icon" />
      <p className="skill-title">React.Js</p>
    </li>
    <li className="skill-item">
      <FaFigma className="skill-icon figma-icon" />
      <p className="skill-title">Figma</p>
    </li>
    <li className="skill-item">
      <IoLogoNodejs className="skill-icon node-icon" />
      <p className="skill-title">NOde.Js</p>
    </li>
    <li className="skill-item">
      <GrMysql className="skill-icon sql-icon" />
      <p className="skill-title">SQL</p>
    </li>
    <li className="skill-item">
      <DiMongodb className="skill-icon mongo-icon" />
      <p className="skill-title">MongoDB</p>
    </li>
  </ul>
</div>
</div>
      <Footer />
    </>
  );
}

export default About;
