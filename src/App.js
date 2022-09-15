import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/microscope.png'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <Router>
    <div className='App'>
    <>
     <Navbar bg='myRed' variant='dark' expand="lg">
      <Container>
      <Navbar.Brand className='brand animate-charcter' as={Link} to='/home'>
            <img
              alt={logo}
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{'           '}
            Labsite
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto p-2 total-items">
            <Nav.Link className='items'  as={Link} to="/home">Home</Nav.Link>
            <Nav.Link className='items' as={Link} to="/services">Services</Nav.Link>
            <Nav.Link className='items' as={Link} to="/about">About</Nav.Link>
            <Nav.Link className='items' as={Link} to="/features">Features</Nav.Link>
            <Nav.Link className='items' as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    <div>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/features' element={<Features/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
    </div>
    </Router>
  );
}

export default App;
