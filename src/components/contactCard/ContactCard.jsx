import React from 'react'
import './ContactCard.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import image1 from '../../images/contactus.jpg'
import bg from '../../images/bg.png'

function ContactCard() {
  return (
   <>
    <Container>
      <Row>
        <Col sm={6}>
          <img className='image1' src={image1} alt='image'/>
        </Col>

        <Col className='contact contact-col' sm={6}>
          <div>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label variant='dark'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" placeholder='Message' rows={4} />
      </Form.Group>
      <Button variant="outline-primary">Submit</Button>
        </Form>
        </div>
        </Col>
      </Row>
    </Container>
   </>
  )
}

export default ContactCard

