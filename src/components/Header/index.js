import './index.css';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { GoProjectSymlink } from "react-icons/go";
import { MdSettingsPhone } from "react-icons/md";

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
              <AiFillHome className='header-icons' />
            </li>
          </Link>
          <Link to="/about" className="link">
            <li className="list">
              <IoMdInformationCircleOutline  className='header-icons' />
            </li>
          </Link>
          <Link to="/projects" className="link">
            <li className="list">
              <GoProjectSymlink  className='header-icons' />
            </li>
          </Link>
          <Link to="/contact" className="link">
            <li className="list">
              <MdSettingsPhone className='header-icons' />
            </li>
          </Link>
        </ul>
        
        {/* Desktop Navigation */}
        <ul className="ul-list-desktop">
          <Link to="/" className="link">
            <li className="list">Home</li>
          </Link>
          <Link to="/about" className="link">
            <li className="list">About</li>
          </Link>
          <Link to="/projects" className="link">
            <li className="list">Projects</li>
          </Link>
          <Link to="/contact" className="link">
            <li className="list">Contact</li>
          </Link>
        </ul>
    </nav>
  );
}

export default Header;
