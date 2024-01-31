import React,{ useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./HomePage.css";
import Accordion from "../accordion/Accordion";
import Navbar from "../Navbar";
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
      {/* <Navbar/> */}
      <div
        id="carouselExample"
        className="carousel slide"
        ref={carouselRef}
        style={{
          marginTop: "10rem",
          marginLeft: "3rem",
          marginRight: "3rem",
          height: "450px",
        }}
      >
        {/* <div className="carousel-inner">
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1548184274-f1d3776448b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
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
              src="https://images.unsplash.com/photo-1602932365975-18086e1491b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
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
              src="https://images.pexels.com/photos/8804891/pexels-photo-8804891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=850&dpr=1"
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
        </div> */}


<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://images.unsplash.com/photo-1602932365975-18086e1491b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
              className="d-block carousel-image img-fluid" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://images.pexels.com/photos/1388278/pexels-photo-1388278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/6140995/pexels-photo-6140995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
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
      <div className="hero-content">
        <h2>Contact Us</h2>
        <p>Have a question or need assistance? Get in touch with our team.</p>
        <Link to="/contact" className="btn btn-primary">Contact Now</Link>
        </div>
      </section>
      <section className="faq-section">
        <h2>Frequent Asked Questions</h2>
        <p>Do you have same Questions, get Answers...</p>
               
        <Link to="Accordion" className="btn btn-primary">FAQs</Link>
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