import React from 'react'
import Navbar from '../Navbar'
import Aboutdata from './Aboutdata'
import './About.css'
import Footer from '../Footer/Footer'

const About = () => {
  return (
    <div className='About'>
        <Navbar />
        <Aboutdata/>
        <Footer/>
        
        </div>
  )
}

export default About