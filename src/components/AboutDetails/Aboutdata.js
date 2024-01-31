import React from "react";
import "./About.css";
import Carousel from "react-bootstrap/Carousel";

const Aboutdata = () => {
  return (
    <div className="about-section">
      <div className="carousel-container">
        <Carousel interval={3000} pause={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://t4.ftcdn.net/jpg/01/38/55/53/240_F_138555350_RRUod6VO3LrXdIkuZN2LxqZ07PvNI4WZ.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Enough of standing in the middle of the road with opened bonnets of
          cars and waiting for your sibling or family member to arrive with a
          mechanic! Here we are, with our loyal services offering you the most
          amazing website with which your car will be repaired anywhere,
          anytime, without bothering anyone to come and pick you and your car
          up.
          <br />
          <br />
          All you have to do is register and provide us with your location, and
          our mechanic will be there for you and your car, fixing your car and
          your mood as well. We assure you that you won't have to bother anyone
          for your car situation because we are here for you with our services.
          Bother people for other things, and not for getting your car fixed.
          <br />
          <br />
          <br />
          The website has been meticulously crafted by Saksham Sharma, Sanjeet
          Singh, Shruti Garg, and Shubham Bisht. We ensure that our customers
          receive the best service from us. Our customer care service will be
          the best we can provide.
        </p>
      </div>
    </div>
  );
};

export default Aboutdata;
