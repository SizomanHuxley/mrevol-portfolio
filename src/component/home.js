import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./css.css";

const Home = () => {
    return (
      
           
            <div className="row align-items-center">
                {/* Column for the image */}
                <div className="col-md-5 text-center">
                    <div className="circle-container">
                        <img src={require('./pictures/Myself1.jpeg')} alt="Michelob Revol" className="circle-img" />
                    </div>
                </div>
                {/* Column for the welcome message and information */}
                <div className="col-md-5">
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
       
    );
}

export default Home;
