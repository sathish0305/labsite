import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/microscope.png'


function NavBar() {
  return (
    <>
     <Navbar bg='myRed' variant='dark' expand="lg">
      <Container>
      <Navbar.Brand className='brand' href="/">
            <img
              alt={logo}
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{'           '}
            Lab<span>site</span>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto p-2 total-items">
            <Nav.Link className='items' href="/">Home</Nav.Link>
            <Nav.Link className='items' href="/services">Services</Nav.Link>
            <Nav.Link className='items' href="/about">About</Nav.Link>
            <Nav.Link className='items' href="/features">Features</Nav.Link>
            <Nav.Link className='items' href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;
