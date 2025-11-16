import React from "react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <img src={logo} alt="LunaGlow Beauty" className="footer-logo" />
          <p>Made with care. Clean ingredients. Beautiful skin.</p>
        </div>

        <div className="links">
          <div>
            <h5>Company</h5>
            <a href="#services">About</a>
            <a href="#services">Careers</a>
          </div>

          <div>
            <h5>Support</h5>
            <a href="#services">FAQ</a>
            <a href="#services">Contact</a>
          </div>
        </div>
      </div>

      <div className="legal">© {new Date().getFullYear()} LunaGlow Beauty · All rights reserved</div>
    </footer>
  );
}
