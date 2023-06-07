import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import Footer from "./Footer/Footer";

import './Contact.css';

function Contact() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [problem, setProblem] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Other code to store the user details in a database
        
    setUsername('');
    setEmail('');
    setPhoneNumber('');
    setProblem('');
    setRating(0);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div className="contact-container">
      <img src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="Contact" className="contact-image" />

      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="contact-title">Contact Us</h2>

        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div id="emailHelp" className="form-text" style={{ color: 'black' }}>
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="problem" className="form-label">
            Problem
          </label>
          <textarea
            className="form-control"
            id="problem"
            rows="4"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            required
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            I agree to the terms and conditions
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="rating" className="form-label">
            Rate your experience:
          </label>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((num) => (
              <FaStar
                key={num}
                className={num <= rating ? 'star active' : 'star'}
                onClick={() => handleRatingChange(num)}
              />
            ))}
          </div>
        </div>

        <button type="submit" className="btn btn-light btn-full-width">
          Submit
        </button>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default Contact;
