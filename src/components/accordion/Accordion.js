
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from '../Navbar'



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
    },
    {
      id: 6,
      question: "Can you service vehicles of all makes and models?",
      answer:
        "Yes, we have expertise in servicing vehicles of all makes and models. Our mechanics are trained and experienced in working with a wide range of car brands. Whether you have a domestic or import vehicle, we can provide the necessary services and repairs.",
    },
    {
      id: 7,
      question: "How long does a typical car service take?",
      answer:
        "The duration of a car service can vary depending on the type of service and the condition of the vehicle. Generally, a basic service can take around 1-2 hours, while more extensive repairs or diagnostics may require additional time. Our team will provide you with an estimated timeframe based on the specific services required for your car.",
    },
    {
      id: 8,
      question: "What is included in a basic car service?",
      answer:
        "A basic car service typically includes an oil change, filter replacement, fluid top-ups, tire pressure check, and a general inspection of the vehicle's components. Additional services may vary depending on the service package chosen.",
    },
  ];

  const handleClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
        <Navbar />
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
    <Footer/>
    </>
  );
};

export default Accordion;
