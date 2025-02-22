import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { FaGithub, FaExternalLinkAlt, FaReact, FaDatabase, FaCode } from "react-icons/fa";
import ContentLoader from "react-content-loader";
import "./index.css";
import { projectsData } from "./projectsData";

const ProjectLoader = () => (
  <ContentLoader 
    speed={2}
    width="100%"
    height={300}
    viewBox="0 0 400 300"
    backgroundColor="#1f1f1f"
    foregroundColor="#2d2d2d"
  >
    <rect x="0" y="0" rx="10" ry="10" width="400" height="300" />
  </ContentLoader>
);

class Projects extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);
  }

  render() {
    const { loading } = this.state;

    return (
      <>
        <Header />
        <div className="projects-container">
          {loading ? (
            Array(4).fill().map((_, index) => <ProjectLoader key={index} />)
          ) : (
            projectsData.map((project) => (
              <div className="project-card" key={project.id}>
                <div className="project-tech-icons">
                  <FaReact className="tech-icon" />
                  <FaDatabase className="tech-icon" />
                  <FaCode className="tech-icon" />
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <p className="project-skills">
                    <strong>Technologies Used:</strong> {project.techologies_used}
                  </p>
                  <div className="project-link-container">
                    <a
                      href={project.view_live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt className="link-icon" />
                      Live Demo
                    </a>
                    <a
                      href={project.repo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub className="link-icon" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <Footer />
      </>
    );
  }
}

export default Projects;