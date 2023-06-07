// import { React, useState } from "react";
// import { questions } from "./api";
// import "./accordion.css";
// import Myaccordion from "./Myaccordion";

// function Accordion() {
//   const [data, setdata] = useState(questions);

//   return (
//     <>
//       <section className="main-div">
//         <h2>Frequently Asked Questions</h2>
//         {data.map((elem) => {
//           //   {...elem} we are passing the things which are inside it
//           return <Myaccordion key={elem.id} {...elem} />;
//         })}
//       </section>
//     </>
//   );
// }

// export default Accordion;


import React, { useState } from "react";
import "./accordion.css"; 

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      id: 1,
      question: "What is the charge for a Basic Car Service at OnTheGoMechanic?",
      answer: "The charges for a Basic Car Service starts at just Rs700 at OnTheGoMechanic. This, however, depends on the car make and model. You can fill in your car’s make, model and fuel type to get the best price for your car service.",
    },
    {
      id: 2,
      question: "Every car is assigned a workshop based on various factors like serviceability, spare parts availability, location and then some. Rest assured, your car will get the best service in Rajpura?",
      answer: "We offer a wide variety of Car Services for you to choose from. With OnTheGoMechanic, you can avail Periodic Car Services, Wheel Balancing and Alignment Services, Car Denting Painting Services, Detailing Services, Custom Repairs and even Car Repairs under an Insurance Claim.",
    },
    {
      id: 3,
      question: "Can I choose a workshop of my choice for my Car Repair at OnTheGoMechanic in Rajpura?",
      answer: "Every car is assigned a workshop based on various factors like serviceability, spare parts availability, location and then some. Rest assured, your car will get the best service in Rajpura.",
    },
    {
      id: 4,
      question: "Why should I choose OnTheGoMechanic against other Service Centers and other service providers?",
      answer: "OnTheGoMechanic is a network of multi-brand Car Service centres spread across multiple locations in Rajpura. We offer the best car services at the most affordable prices. Not only you get a wide selection of Car Services to choose from, but you also save up to 40% on Car Service compared to what is charged at other service centres",
    },
    {
      id: 5,
      question: "What if I am not satisfied with my Car Service with OnTheGoMechanic?",
      answer: "With OnTheGoMechanic, you get an unconditional 500KMS/1Month Network Warranty on Car Repairs and Services redeemable anywhere in Rajpura. No questions asked!",
    }
  ];

  const handleClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {questions.map((question, index) => (
          <div
            key={question.id}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            <div className="faq-question">{question.question}</div>
            <div className="faq-answer">{question.answer}</div> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
