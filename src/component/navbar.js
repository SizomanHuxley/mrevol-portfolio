import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Project from "./project";
import Resume from "./resume";
import Contact from "./contact";
import React from "react";
import About from "./about";
import { NavLink } from "react-router-dom";

const Bar = () => {
    return (
        <>
            <Navbar
                style={{
                    fontFamily: "Malayalam MN",
                    fontSize: "35px",
                    padding: "auto",
                    margin: "auto",
                }}
                variant="dark"
                expand="lg"
            >
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/" activeClassName="active" id="home-link">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" activeClassName="active" id="about-link">About</Nav.Link>
                            <Nav.Link as={NavLink} to="/project" activeClassName="active" id="projects-link">Projects</Nav.Link>
                            <Nav.Link as={NavLink} to="/resume" activeClassName="active" id="resume-link">Resume</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" activeClassName="active" id="contact-link">Contact</Nav.Link>
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
}

export default Bar;
