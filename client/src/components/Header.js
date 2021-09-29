import React from 'react';
import { Link } from 'react-router-dom';
import "./CSS/Header.css";

function Header() {
    
    return (
        <div className="header-wrapper">
            <div className="logo">
                <img className="logo" src="./img/kleiderly_logo.png" alt="Logo" />
            </div>
            <div className="header-title">
                <Link to="/">
                    <h1>CARBON FOOTPRINT CALCULATOR</h1>
                </Link>
            </div>
        </div>
    )
}

export default Header