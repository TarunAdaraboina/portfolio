import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./index.css";
import { projectsData } from "./projectsData";

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
                  <strong>Technologies Used :</strong> {project.techologies_used}
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
