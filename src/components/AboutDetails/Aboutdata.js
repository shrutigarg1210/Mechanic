// import React from "react";
// import "./About.css";

// const Aboutdata = () => {
//   return (
//     <div className="MainCard">
//       <div className="left">
//         <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
//     <div class="carousel-inner">
//       <div class="carousel-item active">
//         <img class="d-block w-100" src="https://images.unsplash.com/photo-1590698933947-a202b069a861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="First slide"/>
//       </div>
//       <div class="carousel-item">
//         <img class="d-block w-100" src="..." alt="Second slide"/>
//       </div>
//       <div class="carousel-item">
//         <img class="d-block w-100" src="..." alt="Third slide"/>
//       </div>
//     </div>
//     </div>
//       </div>
//     <div className="about-data right">
//       <p>
//                     <p className="au">About us</p><br/>
//                     <br/>
//         Enough of Standing in the middle of road with opened bonuts of cars and
//         <br />
//         waiting for your sibling or family member to arrive with a mechanic.!<br />
//                           <b>Here we are....</b><br />
//         with our loyal services offering you the most amazing website <br />
//         with which your car will be repaired anywhere anytime <br />
//         without bothering anyone to come and pick you and your car up.!<br />
//         All you have to do is register give us your location and our mechanic <br />
//         will be there for you and your car and will fix your car and mood as well. <br />
//         We assure you won't bother anyone for<br />
//         your car situation because we are here for you with our services, bother<br />
//         people for other things and not for your car to fix.
//         <br />
//         <br />
//         <br />
//         The website is made with patience by Saksham Sharma,Sanjeet Singh,<br />
//         Shruti Garg and Shubham Bisht and we ensure our coustomers <br />
//         get the best service from us. Our coustomer care service will<br />
//         be the best we can provide.
//       </p>
//     </div>
//     </div>
//   );
// };

// export default Aboutdata;


import React from 'react';
import "./About.css";
import Carousel from 'react-bootstrap/Carousel';

const Aboutdata = () => {
  return (
    <div className="about-section">
      <div className="carousel-container">
        <Carousel interval={3000} pause={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/9250046/pexels-photo-9250046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/16684807/pexels-photo-16684807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="about-content">
        <h2>About Us</h2>
        <p>
  Enough of standing in the middle of the road with opened bonnets of cars and waiting for your sibling or family member to arrive with a mechanic! Here we are, with our loyal services offering you the most amazing website with which your car will be repaired anywhere, anytime, without bothering anyone to come and pick you and your car up.
  <br /><br />
  All you have to do is register and provide us with your location, and our mechanic will be there for you and your car, fixing your car and your mood as well. We assure you that you won't have to bother anyone for your car situation because we are here for you with our services. Bother people for other things, and not for getting your car fixed.
  <br /><br /><br />
  The website has been meticulously crafted by Saksham Sharma, Sanjeet Singh, Shruti Garg, and Shubham Bisht. We ensure that our customers receive the best service from us. Our customer care service will be the best we can provide.
</p>

      </div>
    </div>
  );
};

export default Aboutdata;

