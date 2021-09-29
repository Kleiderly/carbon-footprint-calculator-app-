import React from 'react';
import { Link } from 'react-router-dom';
import './css/Footer.css';

function Footer() {
<<<<<<< HEAD
   return (
      <div className="footer-wrapper">
         <div className="footer-social">FB | INST | TWI</div>
         <div className="footer-copyrights">© 2021 KLEIDERLY</div>
         <div className="footer-admin">
            <Link to="/admin">ADMIN</Link>
         </div>
      </div>
   );
}
=======
    
    return (
        <div className="footer-wrapper">
            <div className="footer-social">
                FB | INST | TWI
            </div>
            <div className="footer-copyrights">
                © 2021 KLEIDERLY
            </div>
            <div className="footer-admin">
                <Link to="/adminpage/login">ADMIN</Link>
            </div>
        </div>
    )
};
>>>>>>> 4eb471c7e6e049ca85720d47c115ed18bc8ccb84

export default Footer;
