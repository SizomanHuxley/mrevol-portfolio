import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Routes, Route, NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./css.css";
import Home from "./home";
import Project from "./project";
import Resume from "./resume";
import Contact from "./contact";
import About from "./about";

const Bar = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleNavbar = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Navbar expanded={expanded} variant="dark" expand="md" className="navbar">
                <Container className="navbar-container">
                    <Navbar.Brand>Michelob Revol</Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        onClick={toggleNavbar}
                        className="navbar-toggle"
                    >
                        {expanded ? <FaTimes /> : <FaBars />}
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav" className={expanded ? 'show' : ''}>
                        <Nav className="ms-auto navbar-content">
                            <Nav.Link as={NavLink} to="/" activeClassName="active" id="home-link" onClick={() => setTimeout(() => {setExpanded(false)}, 300)}>
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/about" activeClassName="active" id="about-link" onClick={() => setTimeout(() => {setExpanded(false)}, 300)}>
                                About
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/project" activeClassName="active" id="projects-link" onClick={() => setTimeout(() => {setExpanded(false)}, 300)}>
                                Projects
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/resume" activeClassName="active" id="resume-link" onClick={() => setTimeout(() => {setExpanded(false)}, 300)}>
                                Resume
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" activeClassName="active" id="contact-link" onClick={() => setTimeout(() => {setExpanded(false)}, 300)}>
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
