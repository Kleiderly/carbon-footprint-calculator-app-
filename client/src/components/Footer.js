import React from 'react';
import { Link } from 'react-router-dom';
import "./CSS/Footer.css";

function Footer() {
    
    return (
        <div className="footer-wrapper">
            <div className="footer-social">
                FB | INST | TWI
            </div>
            <div className="footer-copyrights">
                © 2021 KLEIDERLY
            </div>
            <div className="footer-admin">
                <Link to="/admin">ADMIN</Link>-
                <Link to="/admin/forms">FORMS</Link>
            </div>
        </div>
    )
};

export default Footer;