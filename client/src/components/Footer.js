import React from "react";
import { Link } from "react-router-dom";
import "./css/Footer.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-copyrights">
        <p>
          Kleiderly UG (haftungsbeschränkt)
          <br />
          c/o Factory Mitte HQ. <br />
          Rheinsberger Str. 76/77 . 10115 Berlin
          <br />
          Amtsgericht Berlin (Charlottenburg) HRB 214291
          <br />
        </p>
      </div>
      <div>
        <a href="https://kleiderly.com/" target="_blank" rel="noreferrer">
          <img
            className="footer-logo"
            src="../img/KLEIDERLY_favicon.png"
            alt="Logo"
          />
        </a>
      </div>
      <div className="footer-logo-impressum">
        <div className="footer-impressum">
          <a
            href="https://kleiderly.com/pages/impressum"
            target="_blank"
            rel="noreferrer"
          >
            <p>Impressum</p>
          </a>
        </div>
        <div className="footer-social">
          <a
            href="https://www.instagram.com/kleiderlyberlin/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer-social-icon"
              src="../img/social-icons/instagram.png"
              alt="Logo"
            />
          </a>
          <a
            href="https://www.facebook.com/kleiderly/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer-social-icon"
              src="../img/social-icons/facebook.png"
              alt="Logo"
            />
          </a>
          <a
            href="https://twitter.com/kleiderlyberlin"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer-social-icon"
              src="../img/social-icons/twitter.png"
              alt="Logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/kleiderlyberlin/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer-social-icon"
              src="../img/social-icons/linkedin.png"
              alt="Logo"
            />
          </a>
        </div>
        {/* <div className="footer-admin">
        <Link to="/adminpage/login">ADMIN</Link>
      </div> */}
      </div>
    </div>
  );
}

export default Footer;
