// import React from "react";
// import { useLocation } from "react-router-dom";
// import { useEffect, useRef } from "react";
// import image from "./About.jpg";
// import "./home.css";

// const Home = () => {
//   const location = useLocation();
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       carouselRef.current.querySelector(".carousel-control-next").click();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       {/* Hello {location.state.id} */}

//       <div
//         id="carouselExample"
//         class="carousel slide"
//         ref={carouselRef}
//         style={{
//           marginTop: "1.5%",
//           marginLeft: "20.5%",
//           height: "500px",
//           width: "950px",
//         }}
//       >
//         <div class="carousel-inner">

//           <div class="carousel-item ">
//             <img
//               //src="https://w0.peakpx.com/wallpaper/475/650/HD-wallpaper-3d-car-parts-car-repair-concepts-car-parts-sales-3d-generator-oil-filter-brake-pads-battery-shock-absorbers.jpg"
//               src="https://w0.peakpx.com/wallpaper/782/289/HD-wallpaper-car-got-breakdown-artist-artwork-digital-art-deviantart.jpg"
//               style={{
//                 marginTop:"2%",
//                 marginLeft: "5%",
//                 maxHeight: "100%",
//                 maxWidth: "90%",
//                 objectFit: "cover",
//               }}
//               class="d-block w-100"
//               alt="NO image"
//             />
//           </div>
//           {/* <div class="carousel-item active">
//             <img
//               src={image}
//               style={{
//                 maxHeight: "100%",
//                 maxWidth: "100%",
//                 objectFit: "cover",
//               }}
//               class="d-block w-100"
//               alt="HEH"
//             />
//           </div> */}
//           <div class="carousel-item active">
//             <img
//               // src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//               src="https://w0.peakpx.com/wallpaper/676/21/HD-wallpaper-car-repair-cars-tools-artwork-toolbox-mechanic.jpg"
//               style={{
//                 marginLeft: "5%",
//                 maxHeight: "100%",
//                 maxWidth: "90%",
//                 objectFit: "cover",
//               }}
//               class="d-block w-100"
//               alt="..."
//             />
//           </div>
//           <div class="carousel-item">
//             <img
//               src="https://w0.peakpx.com/wallpaper/445/465/HD-wallpaper-car-repair.jpg"
//               style={{
//                 marginLeft: "15%",
//                 maxHeight: "100%",
//                 maxWidth: "70%",
//                 objectFit: "cover",
//               }}
//               class="d-block w-100"
//               alt="..."
//             />
//           </div>
//         </div>
//         <button
//           class="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide="prev"
//         >
//           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span class="visually-hidden">Previous</span>
//         </button>
//         <button
//           class="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide="next"
//         >
//           <span class="carousel-control-next-icon" aria-hidden="true"></span>
//           <span class="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from "react";
// import { useLocation } from "react-router-dom";
// import { useEffect, useRef } from "react";
// import image from "./About.jpg";
// import "./home.css";
// import Footer from "../Footer/Footer";
// import Accordion from "../accordion/Accordion";

// const Home = () => {
//   const location = useLocation();
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       carouselRef.current.querySelector(".carousel-control-next").click();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       {/* Hello {location.state.id} */}

//       <div
//         id="carouselExample"
//         className="carousel slide"
//         ref={carouselRef}
//         style={{
//           marginTop: "2.5%",
//           marginLeft: "8rem",
//           marginRight: "3rem",
//           height: "500px",
//         }}
//       >
//         <div className="carousel-inner">
//           <div className="carousel-item">
//             <img
//               src="https://images.pexels.com/photos/8804891/pexels-photo-8804891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=850&dpr=1"
//               className="d-block carousel-image img-fluid"
//               alt="NO image"
//             />
//           </div>
//           <div className="carousel-item active">
//             <img
//               src="https://images.pexels.com/photos/1388278/pexels-photo-1388278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               className="d-block carousel-image img-fluid"
//               alt="..."
//             />
//           </div>
//           <div className="carousel-item active">
//             <img
//               src="https://images.pexels.com/photos/5835349/pexels-photo-5835349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               className="d-block carousel-image img-fluid"
//               alt="..."
//             />
//           </div>
//           <div className="carousel-item active">
//             <img
//               src="https://images.pexels.com/photos/4488667/pexels-photo-4488667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               className="d-block carousel-image img-fluid"
//               alt="..."
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src="https://images.pexels.com/photos/6140995/pexels-photo-6140995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               className="d-block carousel-image img-fluid"
//               alt="..."
//             />
//           </div>
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide="prev"
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide="next"
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>

//       <section className="hero-section">
//         <div className="hero-content">
//           <h1>Welcome to Our Mechanic Website</h1>
//           <p>Your Trusted Destination for Car Repair and Maintenance</p>
//           <Link to="/services" className="btn btn-primary">Explore Services</Link>
//         </div>
//       </section>

//       <section className="services-section">
//         <h2>Our Services</h2>
//         <div className="service-card">
//           <div className="service-icon">
//             <i className="fa fa-wrench"></i>
//           </div>
//           <h3>Car Repair</h3>
//           <p>Expert car repair services to fix any mechanical or electrical issues.</p>
//         </div>
//         <div className="service-card">
//           <div className="service-icon">
//             <i className="fa fa-cogs"></i>
//           </div>
//           <h3>Vehicle Maintenance</h3>
//           <p>Comprehensive maintenance services to keep your vehicle in top condition.</p>
//         </div>
//         <div className="service-card">
//           <div className="service-icon">
//             <i className="fa fa-tire"></i>
//           </div>
//           <h3>Tire Services</h3>
//           <p>Professional tire repair, rotation, and replacement services.</p>
//         </div>
//       </section>

//       <section className="contact-section">
//         <h2>Contact Us</h2>
//         <p>Have a question or need assistance? Get in touch with our team.</p>
//         <Link to="/contact" className="btn btn-primary">Contact Now</Link>
//       </section>

//       <footer className="footer">
//         <div className="footer-content">
//           &copy; {new Date().getFullYear()} Mechanic Website. All rights reserved.
//         </div>
//       </footer>
//       <Footer />
//       {/* <Accordion/> */}

//     </div>
//   );
// };

// export default Home;



import React,{ useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./HomePage.css";
import image from "./About.jpg";
import Footer from "../Footer/Footer";
import Accordion from "../accordion/Accordion";

const Home = () => {

    const location = useLocation();
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      carouselRef.current.querySelector(".carousel-control-next").click();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* <header className="header">
        <nav className="navbar">
          <div className="navbar-brand">Mechanic Website</div>
          <ul className="nav-links">
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav> 
      </header> */}
        
        
        <div
        id="carouselExample"
        className="carousel slide"
        ref={carouselRef}
        style={{
          marginTop: "2.5%",
          marginLeft: "8rem",
          marginRight: "3rem",
          height: "500px",
        }}
      >
        <div className="carousel-inner">
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/8804891/pexels-photo-8804891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=850&dpr=1"
              // src="slider2.jpg"
              className="d-block carousel-image img-fluid"
              alt="NO image"
            />
          </div>
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/1388278/pexels-photo-1388278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block carousel-image img-fluid"
              alt="..."
            />
          </div>
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/5835349/pexels-photo-5835349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block carousel-image img-fluid"
              alt="..."
            />
          </div>
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/4488667/pexels-photo-4488667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block carousel-image img-fluid"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/6140995/pexels-photo-6140995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block carousel-image img-fluid"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Mechanic Website</h1>
          <p>Your Trusted Destination for Car Repair and Maintenance</p>
          <Link to="/services" className="btn btn-primary">Explore Services</Link>
        </div>
      </section>

     

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Have a question or need assistance? Get in touch with our team.</p>
        <Link to="/contact" className="btn btn-primary">Contact Now</Link>
      </section>

      <footer className="footer">
      <div className="footer-content">
          &copy; {new Date().getFullYear()} OnTheGoMechanic Website. All rights are reserved.
        </div>
      </footer>  
      

      

    </div>
  );
};

export default Home;
