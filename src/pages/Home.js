import React from 'react'
import Slider from '../components/slider/Slider';
import Services from '../pages/services/Services';
import Features from '../pages/features/Features';
import Contact from '../pages/contact/Contact';
import Footer from '../components/Footer/Footer';



function Home() {
  return (
   <>
   <Slider/>
   <Services/>
   <Features/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default Home;