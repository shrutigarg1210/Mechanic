import React, {useEffect } from "react";

import Navbar from '../Navbar'
import Servicesdata from './Servicesdata'
import './Services.css';
import Footer from '../Footer/Footer'


const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div >
        <Navbar/>
        <Servicesdata/>
        <Footer/>
        </div>
  )
}
 
export default Services