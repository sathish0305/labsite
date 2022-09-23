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
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

        

      </Carousel.Caption>
    </Carousel.Item>
 
    <Carousel.Item interval={1500}>
    <img
          className="d-block w-100 c-img"
          src={image2}
          alt="Second slide"
        />
     
   
      <Carousel.Caption  className='carosel-caption'>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      
      
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item interval={1500}>
    <img
          className="d-block w-100 c-img"
          src={image3}
          alt="Second slide"
        />
     
  
      <Carousel.Caption  className='carosel-caption'>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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
        <h3>Fourth slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

    
      
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  
  )
}

export default slider