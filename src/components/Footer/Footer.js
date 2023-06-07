import React from "react";

const Footer = () => {
  return (
    <>
      
        
        <footer className="footer">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a href="/" class="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="/services" class="nav-link px-2 text-muted"> 
              Features
            </a>
          </li>
          {/* <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li> */}
          <li class="nav-item">
            <a href="Accordion" class="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              About
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              Contact US
            </a>
          </li>
        </ul>
        <div className="footer-content">
          &copy; {new Date().getFullYear()} OnTheGoMechanic Website. All rights are reserved.
        </div>
      </footer>
     
    </>
  );
};

export default Footer;
