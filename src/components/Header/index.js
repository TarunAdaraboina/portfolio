import './index.css';
import { Link } from 'react-router-dom';
import { FaHome, FaUserAlt, FaProjectDiagram, FaPhoneAlt, FaBlog } from "react-icons/fa";

function Header() {
  return (
    <nav className="navbar">
      <Link to="/" className="link">
        <img className='tarun-icon' src="https://res.cloudinary.com/dvtvfpqeo/image/upload/v1733393441/TarunAdaraboina.webp" alt="tarun" />
      </Link>
      
      {/* Mobile Navigation */}
      <ul className='ul-list-mobile'>
        <Link to="/" className="link">
          <li className="list">
            <FaHome className='header-icons' />
          </li>
        </Link>
        <Link to="/projects" className="link">
          <li className="list">
            <FaProjectDiagram className='header-icons' />
          </li>
        </Link>
        <Link to="/blog" className="link">
          <li className="list">
            <FaBlog className='header-icons' />
          </li>
        </Link>
        <Link to="/contact" className="link">
          <li className="list">
            <FaPhoneAlt className='header-icons' />
          </li>
        </Link>
        <Link to="/about" className="link">
          <li className="list">
            <FaUserAlt className='header-icons' />
          </li>
        </Link>
      </ul>

      {/* Desktop Navigation */}
      <ul className="ul-list-desktop">
        <Link to="/" className="link">
          <li className="list">Home</li>
        </Link>
        <Link to="/blog" className="link">
          <li className="list">Blog</li>
        </Link>
        <Link to="/projects" className="link">
          <li className="list">Projects</li>
        </Link>
        <Link to="/contact" className="link">
          <li className="list">Contact</li>
        </Link>
        <Link to="/about" className="link">
          <li className="list">About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Header;
