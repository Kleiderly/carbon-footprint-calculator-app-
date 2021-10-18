import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

function Header() {
   return (
      <div className="header-wrapper">
         <div className="logo">
            <img className="logo" src="../img/kleiderly_logo.png" alt="Logo" />
         </div>
         <div className="header-title">
            <Link to="/">
               <p>CARBON FOOTPRINT CALCULATOR</p>
            </Link>
         </div>
      </div>
   );
}

export default Header;
