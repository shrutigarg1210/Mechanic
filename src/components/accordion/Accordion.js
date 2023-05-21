import { React, useState } from "react";
import { questions } from "./api";
import "./accordion.css";
import Myaccordion from "./Myaccordion";

function Accordion() {
  const [data, setdata] = useState(questions);

  return (
    <>
      <section className="main-div">
    <h2>Frequently Asked Questions</h2>
      {data.map((elem) => {
        //   {...elem} we are passing the things which are inside it
        return <Myaccordion key={elem.id} {...elem} />;
      })} 
      </section>
     
    </>
  );
}

export default Accordion;
