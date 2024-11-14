import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';




export default class AdminNav extends Component {
  render() {
    return (
      <>
        

        <Navbar expand="lg" fixed="top" className="bg-body-white custom-admin-navbar" >
          <Container fluid>
            <div className="d-flex align-items-center">

              <div className="d-flex align-items-center logo-container">
                <img src="\Logo\Government_of_India_logo.webp" alt="India Govt Logo" className="navbar-logo1" />
                <img src="\Logo\kerala-government-142856 transparent.png" alt="Kerala Govt Logo" className="navbar-logo mx-2" />
                <img src="\Logo\Kerala_Excise_Logo.png" alt="Excise Logo" className="navbar-logo2" />
                <Navbar.Brand href="/admin-dashboard" className="logo-text">KERALA EXCISE ADMIN PORTAL</Navbar.Brand>
              </div>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto custom-listbar">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                
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
                <Nav.Link as={Link} to="/login" style={{ color:'red'}} className='login-btn'>Logout</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
