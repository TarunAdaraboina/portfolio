import React, { Component } from "react";
import Slider from "react-slick";
import Header from "../Header";
import Footer from "../Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const projectsData = [
  {
    id: "1",
    title: "Book Hub",
    description:
      "An online platform to explore and review top-rated books, featuring seamless navigation and a responsive design. Users can browse personalized recommendations, ratings, and reviews.",
    skills: "React, JavaScript, CSS, REST APIs, Responsive Design",
    logo_url:
      "https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733834169/bookhubjpeg_bbshtd.jpg",
    repo_url: "https://github.com/TarunAdaraboina/project_bookHub.git"
  },
  {
    id: "2",
    title: "Nxt Trendz",
    description:
      "An e-commerce platform showcasing the latest trends in fashion with authentication, search functionality, and secure transactions. Features include a shopping cart and user account management.",
    skills: "React, Node.js, MongoDB, Authentication, CSS, REST APIs",
    logo_url:
      "https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733834267/images_qi74hc.png",
    repo_url: "https://github.com/TarunAdaraboina/nxttrendz.git"
  },
  {
    id: "3",
    title: "User Management App",
    description:
      "A simple web app to manage user data with add, edit, and delete operations. Features include search, filter, and sort for user records, ensuring smooth management of user profiles.",
    skills: "React, JavaScript, JSONPlaceholder API, CSS",
    logo_url:
      "https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733833893/usermanagement_nb1cca.png",
    repo_url: "https://github.com/TarunAdaraboina/user_managament_app.git"
  },
  {
    id: "4",
    title: "IPL Dashboard",
    description:
      "A dashboard for IPL stats and match details with interactive charts and filters. Users can filter by season, team, or player to view real-time scores, player stats, and rankings.",
    skills: "React, D3.js, JavaScript, CSS, REST APIs",
    logo_url:
      "https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733833877/Tata_IPL_Logo_azcbgd.webp",
    repo_url: "https://github.com/TarunAdaraboina/IPL-Dashboard.git"
  },
  {
    id: "5",
    title: "Jobby App",
    description:
      "A job-search app with advanced filters, authentication, and a personalized dashboard for job applications. Users can browse job listings, save jobs, and track their application status.",
    skills: "React, Node.js, CSS, MongoDB, JWT Authentication, REST APIs",
    logo_url:
      "https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733833869/jobby_n8xpv8.png",
    repo_url: "https://github.com/TarunAdaraboina/JobbyApp.git"
  },
  {
    id: "6",
    title: "Todos Application",
    description:
      "A task management app to add, edit, and delete tasks with deadlines. Users can organize tasks into categories and track progress with real-time updates and notifications for overdue tasks.",
    skills: "React, JavaScript, CSS, Local Storage, Bootstrap",
    logo_url:
      "https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733833859/todopng_pkecki.png",
    repo_url: "https://github.com/TarunAdaraboina/TodosApplication.git"
  },
  {
    id: "7",
    title: "Movie Database",
    description:
      "A movie database where users can search and browse movies, view details like genres, ratings, and trailers, and create personalized watchlists for easy access to their favorite films.",
    skills: "React, JavaScript, CSS, REST APIs, Redux",
    logo_url:
      "https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733833851/WPDM-The-Movie-Database_f9m3ui.png",
    repo_url: "https://github.com/TarunAdaraboina/Movie-Database.git"
  },
  {
    id: "8",
    title: "Restaurant Website",
    description:
      "A responsive restaurant website with detailed menus, reservation system, and reviews. Users can browse the menu, place orders, book tables, and submit reviews for a seamless dining experience.",
    skills: "HTML, CSS, JavaScript, Bootstrap, Responsive Design",
    logo_url:
      "https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733833843/restaurant-cafe-vector-logo-menu-dish-food-or-chef-icon-FXHPX8_snvscl.jpg",
    repo_url: "https://github.com/TarunAdaraboina/Restaurant.git"
  }
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};

class Projects extends Component {
  renderSlider = () => {
    return (
      <Slider {...settings}>
        {projectsData.map(({ id, title, description, skills, logo_url, repo_url }) => (
          <div className="slick-item" key={id}>
            <img className="logo-image" src={logo_url} alt={`${title} logo`} />
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <p className="project-skills"><strong>Skills Used:</strong> {skills}</p>
            <a href={repo_url} target="_blank" rel="noopener noreferrer" className="project-link">
              View Repository
            </a>
          </div>
        ))}
      </Slider>
    );
  };

  render() {
    return (
      <>
        <Header />
        <div className="projects-container">
          <div className="slick-container">{this.renderSlider()}</div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Projects;