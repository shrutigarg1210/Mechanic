import React from "react";
import "./Footer.css"; 


const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li>
          <a href="/" className="footer-link">
            Home
          </a>
        </li>
        <li>
          <a href="/contact" className="footer-link">
            Contact Us
          </a>
        </li>
        <li>
          <a href="Accordion" className="footer-link">
            FAQ 
          </a>
        </li>
        <li>
          <a href="/services" className="footer-link">
            Services
          </a>
        </li>
        <li>
          <a href="/about" className="footer-link">
            About
          </a>
        </li>
      </ul>
      <div className="footer-content">
        &copy; {new Date().getFullYear()} OnTheGoMechanic Website. All rights are reserved.
      </div>
    </footer>
  );
};

export default Footer;
