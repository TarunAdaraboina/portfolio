import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

const projectsData = [
  {
    id: "1",
    title: "Book Hub (Goodreads Clone)",
    description:
      "A modern platform for book enthusiasts to manage their reading lists. Built with React, Bootstrap, and client storage for secure authentication.",
    skills: "React, JavaScript, CSS, REST APIs, Responsive Design, Cookies",
    logo_url:
      "https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733834169/bookhubjpeg_bbshtd.jpg",
    repo_url: "https://github.com/TarunAdaraboina/project_bookHub.git",
    view_live: "https://bookhub1411.ccbp.tech/login",
  },
  {
    id: "2",
    title: "Nxt Trendz (E-Commerce Clone)",
    description:
      "An Amazon/Flipkart-inspired e-commerce platform with secure authentication using JWT tokens and REST API calls.",
    skills: "React, Node.js, MongoDB, Authentication, CSS, REST APIs, Cookies",
    logo_url:
      "https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733834267/images_qi74hc.png",
    repo_url: "https://github.com/TarunAdaraboina/nxttrendz.git",
    view_live: "https://tarun1411.ccbp.tech/login",
  },
  {
    id: "3",
    title: "Jobby App (Finding Jobs)",
    description:
      "A comprehensive job search solution with protected routes, JWT authentication, and REST API integration.",
    skills: "React, Node.js, CSS, MongoDB, JWT Authentication, REST APIs, Cookies",
    logo_url:
      "https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733833869/jobby_n8xpv8.png",
    repo_url: "https://github.com/TarunAdaraboina/JobbyApp.git",
    view_live: "https://jobsprojectmern.ccbp.tech/login",
  },
  {
    id: "4",
    title: "Worlde Clone (Word guessing game)",
    description:
      "A Wordle-like game where users guess a 5-letter word in 6 attempts, with color-coded feedback.",
    skills: "React, CSS, JavaScript, React.Js",
    logo_url:
      "https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733833869/jobby_n8xpv8.png",
    repo_url: "https://github.com/TarunAdaraboina/world-clone",
    view_live: "https://world-clone.vercel.app/",
  },
  {
    id: "5",
    title: "Calculator (Mathematical Operator)",
    description:
      "A simple yet functional calculator application allowing basic arithmetic operations with a clean and responsive design.",
    skills: "React, CSS, JavaScript, React.Js",
    logo_url:
      "https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733833869/jobby_n8xpv8.png",
    repo_url: "https://github.com/TarunAdaraboina/calculator",
    view_live: "https://calculator-pink-sigma.vercel.app/",
  },
  {
    id: "6",
    title: "User Management Dashboard",
    description: "A full-featured user management dashboard with CRUD operations, user authentication, and dynamic data handling.",
    skills: "React, Node.js, MongoDB, JWT Authentication, CSS, REST APIs, Responsive Design",
    repo_url: "https://github.com/TarunAdaraboina/user-management-dashboard",
    view_live: "https://user-management-dashboard-blush.vercel.app/",
  }
];

class Projects extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="projects-container">
          {projectsData.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-skills">
                  <strong>Skills:</strong> {project.skills}
                </p>
                <div className="project-link-container">
                  <a
                    href={project.view_live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Live Demo
                  </a>
                  <span> | </span>
                  <a
                    href={project.repo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </>
    );
  }
}

export default Projects;
