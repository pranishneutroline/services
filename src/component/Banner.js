import React from 'react'
import './banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from "./image/banner.jpg"
import Typewriter from 'typewriter-effect';
import { Container ,Image } from 'react-bootstrap';//

export const Banner = () => {
  return (
    <div className='banner'>
         <figure className='position-relative'>
    <img src={banner} alt="banner"  className='img-fluid'/>
</figure>

<Container className='heading'>
    {/* <h1>Major Services</h1> */}
  <Typewriter onInit={(typewriter)=>
     {typewriter.typeString ("Major Services:").start();}}/> 
  </Container>
    </div>
  
  )
}
export default Banner ;