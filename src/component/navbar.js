import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./css.css";
import Home from "./home";
import Project from "./project";
import Resume from "./resume";
import Contact from "./contact";
import About from "./about";



const Bar = () => {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);

  };

//   const closeNavbar = () => {
//     setIsNavbarOpen(false);
    
//   };


  return (
    <>
      <Navbar variant="dark" expand="md" className="navbar">
      <Container className="navbar-container">
        <Navbar.Brand>Michelob Revol</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  onClick={toggleNavbar} className="navbar-toggle">
            {isNavbarOpen ? <FaTimes /> : <FaBars />}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className={isNavbarOpen ? 'show' : ''}>
            <Nav className="ms-auto navbar-content">
              <Nav.Link as={NavLink} to="/" activeClassName="active" id="home-link">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" activeClassName="active" id="about-link">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/project" activeClassName="active" id="projects-link">
                Projects
              </Nav.Link>
              <Nav.Link as={NavLink} to="/resume" activeClassName="active" id="resume-link">
                Resume
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" activeClassName="active" id="contact-link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Bar;
