import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import AOS from "aos";
import "aos/dist/aos.css";
import { Hero } from './components/Hero';
import Banner from './components/Banner';
import Services from './components/Services';
import Appstore from './components/Appstore';
import Footer from './components/Footer';
import Testimonials from './components/Testimonial';





function App() {
  

  return (
    <div className="bg-white  dark:text-white duration-200 overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Services/>
      <Banner/>
      <Appstore/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
