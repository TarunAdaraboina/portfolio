import React from "react";

import './index.css'

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Tarun Adaraboina. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
