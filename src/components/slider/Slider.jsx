import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import '../slider/Slider.css'
import image1 from '../../images/c-image-1.jpg'
import image2 from '../../images/c-image-2.jpg'
import image3 from '../../images/c-image-3.jpg'
import image4 from '../../images/c-image-4.jpg'



function slider() {
  return (
  <Carousel className='carousel'>
         
    <Carousel.Item className='carousel-item' interval={1000}>
    <img
          className="d-block w-100 c-img"
          src={image1}
          alt="Second slide"
        />
     
      <Carousel.Caption className='carosel-caption'>
        <h3>Latest News</h3>
        <p>Equipped with the latest 1.5 Tesla, 128 and 16 Slice CT Scanner, to deliver quality care.</p>

        

      </Carousel.Caption>
    </Carousel.Item>
 
    <Carousel.Item interval={1500}>
    <img
          className="d-block w-100 c-img"
          src={image2}
          alt="Second slide"
        />
     
   
      <Carousel.Caption  className='carosel-caption'>
        <h3>Our Team</h3>
        <p>Highly skilled team that works together to deliver the highest standard of diagnostic service.</p>

      
      
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item interval={1500}>
    <img
          className="d-block w-100 c-img"
          src={image3}
          alt="Second slide"
        />
     
  
      <Carousel.Caption  className='carosel-caption'>
        <h3>Our Centers</h3>
        <p>
        Well-managed and hygienic centers for customers to feel comfortable during checkups
        </p>

       
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item className='carousel-item' interval={1500}>
    <img
          className="d-block w-100 c-img"
          src={image4}
          alt="Second slide"
        />
     

      <Carousel.Caption  className='carosel-caption'>
        <h3>Popular Health Check Packages</h3>
        <p>
Basic Health Check-Up At Home
Master Health Check-Up At Home</p>

    
      
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  
  )
}

export default slider