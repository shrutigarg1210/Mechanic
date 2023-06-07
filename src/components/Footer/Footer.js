// import React from "react";

// const Footer = () => {
//   return (
//     <>
      
        
//         <footer className="footer">
//         <ul class="nav justify-content-center border-bottom pb-3 mb-3">
//           <li class="nav-item">
//             <a href="/" class="nav-link px-2 text-muted">
//               Home
//             </a>
//           </li>
//           <li class="nav-item">
//             <a href="/services" class="nav-link px-2 text-muted"> 
//               Features
//             </a>
//           </li>
//           {/* <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li> */}
//           <li class="nav-item">
//             <a href="Accordion" class="nav-link px-2 text-muted">
//               FAQs
//             </a>
//           </li>
//           <li class="nav-item">
//             <a href="#" class="nav-link px-2 text-muted">
//               About
//             </a>
//           </li>
//           <li class="nav-item">
//             <a href="#" class="nav-link px-2 text-muted">
//               Contact US
//             </a>
//           </li>
//         </ul>
//         <div className="footer-content">
//           &copy; {new Date().getFullYear()} OnTheGoMechanic Website. All rights are reserved.
//         </div>
//       </footer>
     
//     </>
//   );
// };

// export default Footer;


// import React from "react";
// // import "./Footer.css"; 

// const Footer = () => {
//   return (
//     <>
//       <footer className="footer">
//         <ul className="nav justify-content-center border-bottom pb-3 mb-3">
//           <li className="nav-item">
//             <a href="/" className="nav-link px-2 text-muted">
//               Home
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="/services" className="nav-link px-2 text-muted">
//               Features
//             </a>
//           </li>
//           {/* <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li> */}
//           <li className="nav-item">
//             <a href="Accordion" className="nav-link px-2 text-muted">
//               FAQs
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="#" className="nav-link px-2 text-muted">
//               About
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="#" className="nav-link px-2 text-muted">
//               Contact US
//             </a>
//           </li>
//         </ul>
//         <div className="footer-content">
//           &copy; {new Date().getFullYear()} OnTheGoMechanic Website. All rights are reserved.
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;

import React from "react";
import "./Footer.css"; 
import Accordion from "../accordion/Accordion";

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
