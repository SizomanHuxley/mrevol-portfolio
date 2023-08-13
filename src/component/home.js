import React from "react";
import { motion } from "framer-motion";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./css.css";

const Home = () => {
    return (
        <motion.div
        className="home"
        initial={{ opacity: 0, x: "5%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "20%" }}
        transition={{ duration: 2 }}
    >
           
            <div className="row align-items-center">
                {/* Column for the image */}
                <div className="col-md-4 custom-style text-center">
                    <div className="circle-container">
                        <img src={require('./pictures/Myself1.jpeg')} alt="Michelob Revol" className="circle-img" />
                    </div>
                </div>
                {/* Column for the welcome message and information */}
                <div className="col-md-4 custom-style">
                    {/* Welcome message */}
                    <div className='welcome'>Hello, Welcome to my portfolio!</div>
                    <br />
                    {/* Information */}
                    <div className="info">
                        <p>
                            I am <span className="myName">Michelob Revol</span>,
                            a recent graduate aspiring to build a career as a Software Developer, Web & Mobile App Developer.
                        </p>
                    </div>
                </div>
            </div>
       </motion.div>
    );
}

export default Home;
