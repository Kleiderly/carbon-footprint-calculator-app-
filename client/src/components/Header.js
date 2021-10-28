import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

function Header() {
   return (
      <div className="header-wrapper light-accent-text">
         <img className="logo" src="../img/kleiderly_logo.png" alt="Logo" />
         <div className="header-main">
            <Link to="/">
               <p className="header-title">CARBON FOOTPRINT CALCULATOR</p>
            </Link>
         </div>
      </div>
   );
}

export default Header;
