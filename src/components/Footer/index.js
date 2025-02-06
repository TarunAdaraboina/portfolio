import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Tarun Adaraboina. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
