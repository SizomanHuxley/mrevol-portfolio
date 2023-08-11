import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./home";
import Project from "./project";
import Resume from "./resume";
import Contact from "./contact";
import About from "./about";

function Transition() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/resume" element={<Resume />} />

      </Routes>
    </AnimatePresence>
  );
}

export default Transition;