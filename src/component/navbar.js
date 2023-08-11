/**
 * Navigation bar component for the application.
 * @module Bar
 */
import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route,} from "react-router-dom";
import Home from "./home";
import Project from "./project";
import Resume from "./resume";
import Contact from "./contact";
import "./css.css"
import React from "react";
import { FaHome} from 'react-icons/fa';
import About from "./about";
import { NavLink } from "react-router-dom";


const Bar = () => {
  
    return (
    <>
    <Navbar
    style={{
        fontFamily: "Malayalam MN",
        fontSize: "35px",
        padding: "10px 0px 40px 0px",
    }}
    variant="dark"
    expand="lg"
    >
        <Container>
        <Navbar.Brand className="navbar-brand" id="home-link"
        style={{
            fontSize: "40px",
            color: "white",
            paddingRight: "350px",
            paddingLeft: "1px"
        }}
        href="/"><FaHome style={{marginRight: "15px"}} />
        Home

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto d-flex fontSize: 20px">
            
            
            <NavLink to="/about" activeClassName="active" id="about-link" className="nav-link">About</NavLink>
            <NavLink to="/project" activeClassName="active" id="projects-link" className="nav-link">Projects</NavLink>
            <NavLink to="/resume" activeClassName="active" id="resume-link" className="nav-link">Resume</NavLink>
            <NavLink to="/contact" activeClassName="active" id="contact-link" className="nav-link">Contact</NavLink>
        
        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>

     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Bar;