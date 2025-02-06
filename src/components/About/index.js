import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import './index.css';

function About() {
  return (
    <>
      <Header />
      <div className="about-container">
        <section className="about-me">
          <h1 className="about-title">
            Tarun Adaraboina
          </h1>
          <p className="about-description">
            I'm a Full-Stack Developer with a strong foundation in frontend and backend technologies. I recently completed my Industry Ready Certification in Full-Stack Development from Nxtwave Disruptive Technologies, where I honed my skills in React, Node.js, and Python. With a background in commerce and an MBA in Human Resources & Finance, I bring a unique blend of technical and business acumen to every project. I'm always eager to learn new technologies and tackle challenging problems. When I'm not coding, you can find me exploring the latest trends in tech or working on personal projects to expand my skill set.
          </p>
        </section>

        <section className="education">
          <h2 className="education-title">Education</h2>
          <ul className="education-list">
            <li className="education-item">
              <strong>Nxtwave Disruptive Technologies</strong> - Industry Ready Certification in Full-stack Development (Jun 2023 - Ongoing)
            </li>
            <li className="education-item">
              <strong>Anubose Institute of Technology</strong> - MBA in Human Resource & Finance (7.5%) (2022 - 2024)
            </li>
            <li className="education-item">
              <strong>Priyadarshini Degree College</strong> - B Com in Commerce (7.65 CGPA) (2019 - 2022)
            </li>
            <li className="education-item">
              <strong>Krishnaveni Junior College</strong> - Intermediate_CEC (78.8%) (2017 - 2019)
            </li>
            <li className="education-item">
              <strong>Triveni School</strong> - Secondary School Certificate (7.8%) (2016 - 2017)
            </li>
          </ul>
        </section>

        <section className="skills">
          <h2 className="skills-title">Skills</h2>
          <p>HTML, CSS, SQL, PYTHON, JAVASCRIPT, NODEJS, REACTJS</p>
        </section>

        <section className="download">
          <a href="/path-to-your-resume.pdf" download="Tarun_Adaraboina_Resume">
            <button className="download-btn">Download My Resume</button>
          </a>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
