import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css.css"

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <div className="footer text-center" style={{ border: "2px solid white", fontFamily: "Malayalam MN", fontSize: "20px", backgroundColor: "white", color: "black", margin: "5px"}}>
            <p>Michelob Revol © {currentYear}</p>
        </div>
    );
}

export default Footer;