import React from "react";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

const Contact = () => {
    const whatsapp = "https://wa.me/+15615671891"; 
    const email = "mrevol2023@gmail.com"; // 
    const linkedin = "https://www.linkedin.com/in/michelob-revol"; 
    const github = "https://github.com/sizomanhuxley"; 
    const phoneNumber = "+1 561-567-1891"; 

    return (

        <motion.div
      className="contact"
      initial={{ opacity: 0, x: "5%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "20%" }}
      transition={{ duration: 2 }}
  >


        <div className="row" >
            <div className="contact-container" style={{paddingBottom: "60px", paddingRight: "15px", paddingLeft: "15px"}}>
                <div className="col-md-4 mx-auto ms-auto text-center custom-style">
                    <p id="contact-text" style={{fontSize: "60px"}}>Contact Me</p>
                    <p id="desc-text" style={{fontSize: "25px"}}>Feel free to get in touch if you have any opportunities or if you simply want to connect. I'm available through these channels, and I've also designed and built this website to showcase my skills.</p>

                    <div className="contact-icons" style={{ fontSize: "50px", paddingBottom: "auto"}} >
                        <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="whatsapp" >
                            <FaWhatsapp/>
                        </a>
                        <a href={`mailto:${email}`} className="email" >
                            <FaEnvelope />
                        </a>
                        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="linkedin" >
                            <FaLinkedin />
                        </a>
                        <a href={github} target="_blank" rel="noopener noreferrer" className="github" >
                            <FaGithub />
                        </a>
                        <a href={`tel:${phoneNumber}`} className="phone">
                            <FaPhoneAlt />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
    );
};

export default Contact;
