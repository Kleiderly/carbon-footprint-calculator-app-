import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

function Header() {
<<<<<<< HEAD
    
    return (
        <div className="header-wrapper">
            <div className="logo">
                <img className="logo" src="../img/kleiderly_logo.png" alt="Logo" />
            </div>
            <div className="header-title">
                <Link to="/">
                    <h1>CARBON FOOTPRINT CALCULATOR</h1>
                </Link>
            </div>
        </div>
    )
=======
   return (
      <div className="header-wrapper">
         <div className="logo">
            <img className="logo" src="../img/kleiderly_logo.png" alt="Logo" />
         </div>
         <div className="header-title">
            <Link to="/">
               <h1>CARBON FOOTPRINT CALCULATOR</h1>
            </Link>
         </div>
      </div>
   );
>>>>>>> 06846d2c7bea3a857c734cb85b023db414e52cf2
}

export default Header;
