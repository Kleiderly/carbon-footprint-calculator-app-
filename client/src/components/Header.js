import React from 'react';
import "./CSS/Header.css";

const Header =()=> {
    
    return (
        <div className="header-wrapper">
            <div className="logo">
                <img className="logo" src="./img/kleiderly_logo.png" alt="Logo" />
            </div>
            <div className="header-title">
                <h1>CARBON FOOTPRINT CALCULATOR</h1>
            </div>
        </div>
    )
}

export default Header