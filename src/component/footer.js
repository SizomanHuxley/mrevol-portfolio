import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css.css"

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <div className="footer text-center">
            <p>Michelob Revol © {currentYear}</p>
        </div>
    );
}

export default Footer;
