import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';




export default class NavbarComp extends Component {
  render() {
    return (
      <>
        

        <Navbar expand="lg" fixed="top" className="bg-body-white custom-navbar" >
          <Container fluid>
            <div className="d-flex align-items-center">

              <div className="d-flex align-items-center logo-container">
                <img src="\Logo\Government_of_India_logo.webp" alt="India Govt Logo" className="navbar-logo1" />
                <img src="\Logo\kerala-government-142856 transparent.png" alt="Kerala Govt Logo" className="navbar-logo mx-2" />
                <img src="\Logo\Kerala_Excise_Logo.png" alt="Excise Logo" className="navbar-logo2" />
                <Navbar.Brand href="/" className="logo-text">KERALA EXCISE DEPARTMENT</Navbar.Brand>
              </div>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto custom-listbar">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <NavDropdown title="E-Services" id="basic-nav-dropdown" >
                  <NavDropdown.Item href="https://services.keralaexcise.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer">Service Plus</NavDropdown.Item>
                  <NavDropdown.Item href="https://eexcise.kerala.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer">E-Office</NavDropdown.Item>
                  <NavDropdown.Item href="https://earms.keralaexcise.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer">E-Arms</NavDropdown.Item>
                  <NavDropdown.Item href="https://etreasury.kerala.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer">E-Treasury</NavDropdown.Item>
                  <NavDropdown.Item href="https://etenders.kerala.gov.in/nicgep/app"
                    target="_blank"
                    rel="noopener noreferrer">E-Tender</NavDropdown.Item>
                  <NavDropdown.Item href="https://mailer.psc.kerala.gov.in/evacancy/index.php"
                    target="_blank"
                    rel="noopener noreferrer">E-Vacancy</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="https://seec.keralaexcise.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer">SEEC</NavDropdown.Item>
                  <NavDropdown.Item href="https://ecurb.keralaexcise.gov.in/#!"
                    target="_blank"
                    rel="noopener noreferrer">ECURB</NavDropdown.Item>
                  <NavDropdown.Item href="https://fleet.keralaexcise.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer">FLEET</NavDropdown.Item>
                  <NavDropdown.Item href="https://prism.kerala.gov.in/login.jsp"
                    target="_blank"
                    rel="noopener noreferrer">PRISM</NavDropdown.Item>
                  <NavDropdown.Item href="https://veels.kerala.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer">VEELS</NavDropdown.Item>
                  <NavDropdown.Item href="https://spark.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer">SPARK</NavDropdown.Item>
                  <NavDropdown.Item href="https://cmo.kerala.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer">CMO</NavDropdown.Item>
                  <NavDropdown.Item href="http://www.sics.kerala.gov.in/varam/"
                    target="_blank"
                    rel="noopener noreferrer">VARAM</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/gallery" >Gallery</Nav.Link>
                <NavDropdown title="Information" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/transactions">General</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/transactions">Abkari Policy</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/transactions">Employee Corner</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/transactions">Training</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/transactions">License Fee</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/transactions">Plan Fund</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/transactions">RTI</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Downloads" id='basic-nav-dropdown'>
                  <NavDropdown.Item as={Link} to="/Enforcement">Enforcement Activities</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Enforcement">Orders & Tenders</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Enforcement">Forms</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Enforcement">Acts</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/Enforcement">Karuthal</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Enforcement">Kavacham</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Enforcement">Unarvu</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/footer" >Contact</Nav.Link>
                <Nav.Link as={Link} to="/login" style={{ color:'#6096ba'}} className='login-btn'>Login</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
