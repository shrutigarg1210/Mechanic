import React, { useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'
// passing it as props
const Myaccordion = ({question,answer}) => {

    const [show,setshow]=useState(false)
  return (
   <>
     <Navbar/>
    <div className="main-heading">
        <p onClick={()=>setshow(!show)}>{show? "➖":" ➕"}</p>
        <h3>{question}</h3>
    </div>
    {show && <p className='answers'>{answer}</p>}
   <Footer/>
   </>
  )
}

export default Myaccordion
