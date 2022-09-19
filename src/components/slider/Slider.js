import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../slider/Slider.css'


function slider() {
  return (
  <Carousel className='carousel'>
         
    <Carousel.Item className='carousel-item' interval={1000}>
     
      <Carousel.Caption className='caption'>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item interval={1500}>
     
      <Carousel.Caption  className='caption'>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item interval={1500}>

      <Carousel.Caption  className='caption'>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item className='carousel-item' interval={1500}>

      <Carousel.Caption  className='caption'>
        <h3>Fourth slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default slider