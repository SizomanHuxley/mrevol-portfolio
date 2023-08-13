import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css.css"

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <div className="footer text-center" style={{ 
            border: "2px solid black", 
            fontFamily: "Malayalam MN", 
            fontSize: "20px", 
            backgroundColor: "white", 
            color: "black",
            margin: "15px 0px 0px 0px",
            padding: "10px 0px 10px 0px", 
            width: "100%"
         }}>
            <p>Michelob Revol © {currentYear}</p>
        </div>
    );
}

export default Footer;
