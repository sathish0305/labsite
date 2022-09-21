import React from 'react'
import Slider from '../components/slider/Slider';
import Services from '../pages/services/Services';
import About from '../pages/About';
import Features from '../pages/features/Features';
import Contact from '../pages/Contact';

function Home() {
  return (
   <>
   <Slider/>
   <Services/>
   <About/>
   <Features/>
   <Contact/>
   </>
  )
}

export default Home;