import React from 'react';
import {FaFilePdf} from 'react-icons/fa';
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
        className="about"
        initial={{ opacity: 0, x: -10 }} // Start slightly to the left
        animate={{
          opacity: 1,
          x: [0, 10, -10, 10, -5, 5, 0], // Values to create the shaking effect
          transition: { duration: 0.5, repeatType: "reverse" }, // Shaking configuration
        }}
        exit={{ opacity: 0 }}
      >
        <div className="row">
            <div className="resume-container custom-style">
                <div className="col-md-7 mx-auto mr-auto" style={{backgroundColor: "white", color: "black", padding: "35px" }}>
                    <p className="text-center" style={{borderBottom: "2px solid"}}>
                        M I C H E L O B   R E V O L <br />
                        West Palm Beach, FL | mrevol2023@gmail.com | (561) 567-1891
                    </p>

                    <h3>EDUCATION</h3>
                    <p>
                        Bachelor of Science, Computer Science<br />
                        Florida Atlantic University - Boca Raton, FL<br />
                        GPA: 3.6
                    </p>
                    <br/>

                    <h3>ACADEMIC PROJECTS</h3>
                    <p>
                        <strong>Property Management System (Principles of Software Engineering, Summer 2022)</strong><br />
                        A website that emulates a property management system where users can register for accounts, login to accounts,
                        update personal information, store, retrieve, update, and delete Personal Inventories.
                    </p>
                    <p>
                        <strong>Tail Together (iOS Mobile App Project, Fall 2022)</strong><br />
                        An application that allows users to chat with each other on upcoming venues to meet new friends that have similar interest,
                        have a pregame party, or just talk about the event.
                    </p>
                    <p>
                        <strong>Movie App (Full Stack Web Development)</strong><br />
                        The movie app is a project that provides users with a sleek and user-friendly interface to browse the most popular movies.
                        Built using modern technologies such as React, Bootstrap, and TMDb API, the website offers a wide range of movie options to choose from.
                        The backend is supported by Firebase and MongoDB, ensuring efficient storage and retrieval of user data.
                    </p>
                    <br/>
                    <h3>RELEVANT COURSEWORK</h3>
                    <p>
                        Introduction to Programming, Foundations of Computer Science, Introduction to Internet Computing, Data Structures,
                        Principles of Software Engineering, Computer Operating Systems, Theory of Computation, Mobile App, Full Stack Web Development, Intro to Deep Learning.
                    </p>
                    <br/>
                    <h3>SKILLS</h3>
                    <p>
                        SQL, HTML, CSS, JavaScript, Swift, XCode, Parse, Firebase, C/C++, MongoDB, jQuery, Python, Postman, Node.Js
                    </p>

                    <br/>
                    <h3>EXPERIENCE</h3>
                    <p>
                        Compounder, Oxygen Development, Aug 2020 - Current, West Palm Beach, FL<br />
                        - Mix different cosmetic powders together and other types of chemicals for makeup<br />
                        - Follow specific recipes and processes, stirring the correct amounts of materials together.
                    </p>
                    <br/>
                    <h3>LANGUAGES</h3>
                    <p>
                        Spanish (Conversational), Haitian Creole (Native), French (Advanced), English (Fluent)
                    </p>
                    <br/>

                    <h3 className="text-center">Download PDF Version</h3>
        <a href="/Mrevol_Resume.pdf" download>
          <p id='file' style={{textAlign: "center"}}><FaFilePdf/>Mrevol_Resume.pdf </p>
        </a>
            </div>
            </div>
        </div>
        </motion.div>
    );
}

export default Resume;
