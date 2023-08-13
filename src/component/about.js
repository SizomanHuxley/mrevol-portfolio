import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css.css";
import { motion } from "framer-motion";
import MyImage from './pictures/Myself2.jpeg'; 

const About = () => {

    return (
      <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 4 }}
    >
            <div className="row ">
            <div className="col-md-5">
            <p style={{fontSize: "20px", backgroundColor: "white", color: "black", padding: "20px"}} ><br/> As you already know, my name is Michelob Revol, a recent graduate with an insatiable passion for technology and an unwavering drive to leave a positive mark through my skills. Armed with a <span className='degree'> Bachelor of Science in Computer Science </span> from Florida Atlantic University, which I proudly earned in August 2023, I am now embarking on an exciting journey to secure a full-time role as a software engineer.</p>
                    
                    <div className="abt-image" style={{padding: "10px"}}>
                        <img src={MyImage} alt="Michelob Revol" className="about-image" />
                    </div>
                    <p className="awards" style={{padding: "10px"}}>Summer 2023 Senior Design Showcase<br />Judges Choice Award: Best Project</p>
                </div>

                <div className="col-md-6">
                  <div className="information" style={{backgroundColor: "white", color: "black"}}>
                    <p style={{padding: "20px"}}> 
                  <p >My proficiency spans various programming languages, including the likes of C/C++, Python, and Swift. Alongside, I've immersed myself in the world of web development, mastering HTML, CSS, React, and JavaScript to craft immersive digital experiences. Additionally, my fascination with mobile app development has led me to explore the captivating world of iOS. As an ardent iOS app enthusiast, I've dedicated considerable time to honing my craft, churning out applications that seamlessly blend creativity with functionality.</p>                    
                    <p>My journey has led me to explore cutting-edge technologies such as Firebase, MangoDB, and Parse. These tools, coupled with my drive for innovation, have enabled me to create dynamic and responsive apps that stand out in a crowded digital landscape.</p>
                    
                    <p>Beyond my technical prowess, I am a firm believer in the power of collaboration and transparent communication. I thrive in team environments, leveraging my knack for problem-solving to not only contribute meaningfully but also foster an atmosphere of mutual growth and success.</p>
                    
                    <p>As I embark on this exciting phase of my career, I'm not merely seeking a job; I'm in pursuit of a purpose. A purpose to innovate, to challenge conventions, and to contribute to the ever-evolving world of technology. Join me on this journey, and together, we can reshape the future.</p>
                    
                    <p>Let's connect and explore how we can collaborate to create extraordinary digital solutions that resonate with users and make a positive impact on the world.</p>
                    </p>
                </div>
                </div>
                
            </div>
        </motion.div>
    );
};

export default About;



