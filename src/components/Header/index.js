import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { FaHome, FaBlog } from "react-icons/fa";
import { ImUserTie } from "react-icons/im";
import { MdContactSupport } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";

const Header = () => {
  return (
    <nav className="navbar" aria-label="Main Navigation">
      <Link to="/" className="logo-link" aria-label="Home">
        <h1 className="tarun-icon" >TA</h1>
      </Link>
      
      {/* Mobile Navigation */}
      <ul className="nav-list-mobile">
        <li className="nav-item">
          <Link to="/" className="link" aria-label="Home">
            <FaHome className="header-icon" />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="link" aria-label="About">
            <ImUserTie className="header-icon" />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="link" aria-label="Projects">
            <GoProjectSymlink className="header-icon" />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="link" aria-label="Blog">
            <FaBlog className="header-icon" />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="link" aria-label="Contact">
            <MdContactSupport className="header-icon" />
          </Link>
        </li>
      </ul>

      {/* Desktop Navigation */}
      <ul className="nav-list-desktop">
        <li className="nav-item">
          <Link to="/" className="link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="link">Blog</Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="link">Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
