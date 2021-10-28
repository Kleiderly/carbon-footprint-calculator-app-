import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

function Header() {
   return (
      <div className="header-wrapper">
         <div className="header-main">
            <Link to="/">
               <p className="header-title">Fashion Footprint</p>
            </Link>
         </div>
         <div className="logo">
            <img src="../img/kleiderly_logo.png" alt="Logo" />
         </div>
      </div>
   );
}

export default Header;
