import 'bootstrap/dist/css/bootstrap.min.css';
import "./css.css"
import React from "react";
import { motion } from "framer-motion";


const Home = () => {  
    
    return (
      <motion.div
      className="home"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 3 }}
  >
        <div className="row align-items-center">
          <div className="col-md-5 text-center">
            <div className="circle-container">
              <img src={require('./pictures/Myself1.jpeg')} alt="Michelob Revol" className="circle-img" />
            </div>
          </div>
          <div className="col-md-5">
              <div className='welcome'> Hello, Welcome to my portfolio!</div>
              <br/> 
              <div className="info">
                        <p>
                            I am <span className="myName"> Michelob Revol</span>
                             , a recent graduate aspiring to build a career as a Software Developer, Web & Mobile App Developer.
                        </p>
                    </div>
          </div>
        </div>
     
      </motion.div>
    );
}
export default Home;


